import { createHmac, timingSafeEqual } from 'node:crypto';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 256 * 1024;
const MAX_SIGNATURE_AGE_SECONDS = 5 * 60;
const processedEventIds = new Set<string>();

function verifySignature(rawBody: string, header: string, secret: string) {
  const match = /^t=(\d+),v1=([0-9a-f]{64})$/.exec(header);
  if (!match) return false;

  const timestamp = Number(match[1]);
  if (
    !Number.isSafeInteger(timestamp) ||
    Math.abs(Date.now() / 1000 - timestamp) > MAX_SIGNATURE_AGE_SECONDS
  ) {
    return false;
  }

  const expected = createHmac('sha256', secret)
    .update(`${match[1]}.${rawBody}`)
    .digest();
  const received = Buffer.from(match[2], 'hex');

  return received.length === expected.length && timingSafeEqual(received, expected);
}

export async function POST(request: Request) {
  const secret = process.env.ZEFFY_WEBHOOK_SECRET;
  const signature = request.headers.get('Zeffy-Signature');
  const contentLength = request.headers.get('content-length');

  if (!secret) {
    return Response.json({ error: 'Webhook is not configured' }, { status: 500 });
  }

  if (!signature || (contentLength && Number(contentLength) > MAX_BODY_BYTES)) {
    return Response.json({ error: 'Invalid webhook request' }, { status: 400 });
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: 'Webhook payload is too large' }, { status: 413 });
  }

  if (!verifySignature(rawBody, signature, secret)) {
    return Response.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  let event: {
    id?: unknown;
    type?: unknown;
    data?: { status?: unknown };
  };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  if (
    event.type !== 'payment.completed' ||
    event.data?.status !== 'succeeded' ||
    typeof event.id !== 'string'
  ) {
    return Response.json({ received: true });
  }

  if (processedEventIds.has(event.id)) {
    return Response.json({ received: true, duplicate: true });
  }

  // Replace this process-local guard with a database unique constraint before
  // attaching order fulfillment, notifications, or inventory side effects.
  processedEventIds.add(event.id);

  return Response.json({ received: true });
}