import { createHmac, timingSafeEqual } from 'node:crypto';

const MAX_SIGNATURE_AGE_SECONDS = 5 * 60;

function isValidSignature(rawBody: string, signatureHeader: string, secret: string) {
  const values = Object.fromEntries(
    signatureHeader.split(',').map((part) => part.split('=', 2))
  );
  const timestamp = Number(values.t);

  if (
    !Number.isFinite(timestamp) ||
    Math.abs(Date.now() / 1000 - timestamp) > MAX_SIGNATURE_AGE_SECONDS ||
    !values.v1
  ) {
    return false;
  }

  const expected = createHmac('sha256', secret)
    .update(`${values.t}.${rawBody}`)
    .digest('hex');
  const received = Buffer.from(values.v1, 'hex');
  const expectedBuffer = Buffer.from(expected, 'hex');

  return (
    received.length === expectedBuffer.length &&
    timingSafeEqual(received, expectedBuffer)
  );
}

export async function POST(request: Request) {
  const secret = process.env.ZEFFY_WEBHOOK_SECRET;
  const signature = request.headers.get('Zeffy-Signature');

  if (!secret || !signature) {
    return Response.json({ error: 'Webhook is not configured' }, { status: 500 });
  }

  const rawBody = await request.text();

  if (!isValidSignature(rawBody, signature, secret)) {
    return Response.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  let event: { type?: string; data?: { status?: string } };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  if (event.type !== 'payment.completed' || event.data?.status !== 'succeeded') {
    return Response.json({ received: true });
  }

  return Response.json({ received: true });
}