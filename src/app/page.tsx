import Hero from '@/components/Hero';
import HowToOrder from '@/components/HowToOrder';
import MenuCatalog from '@/components/MenuCatalog';
import SattvikExplainer from '@/components/SattvikExplainer';
import PickupInfo from '@/components/PickupInfo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Restaurant', 'FoodEstablishment', 'LocalBusiness'],
      '@id': 'https://www.govindashalifax.ca/#restaurant',
      name: "Govinda's Kitchen Halifax",
      alternateName: [
        'Govindas Halifax',
        "Govinda's Halifax",
        'Govindas Kitchen',
        'ISKCON Halifax Kitchen',
      ],
      url: 'https://www.govindashalifax.ca',
      logo: 'https://www.govindashalifax.ca/images/browser-tab-icon.png',
      image: 'https://www.govindashalifax.ca/images/og-image.jpeg',
      description:
        'Authentic Indian Sattvik snacks, traditional sweets, Diwali specials, chikkis, stone-roasted khakhras, and ready-to-eat vegetarian meals in Halifax, Nova Scotia. 100% Pure Vegetarian, No Onion & No Garlic.',
      telephone: '+1-902-329-9889',
      priceRange: '$',
      currenciesAccepted: 'CAD',
      paymentAccepted: 'Cash, Credit Card, Debit Card, Online',
      servesCuisine: [
        'Indian',
        'Vegetarian',
        'Sattvik',
        'Prasadam',
        'Diwali Sweets',
        'Vegan Friendly',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '29 Westwood Boulevard',
        addressLocality: 'Upper Tantallon',
        addressRegion: 'NS',
        postalCode: 'B3Z 1L3',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.6938,
        longitude: -63.8962,
      },
      hasMenu: 'https://www.govindashalifax.ca/#menu',
      acceptsReservations: false,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '18:30',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '12:00',
          closes: '20:00',
        },
      ],
      parentOrganization: {
        '@type': 'Organization',
        name: 'ISKCON Halifax',
        url: 'https://www.govindashalifax.ca',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.govindashalifax.ca/#website',
      url: 'https://www.govindashalifax.ca',
      name: "Govinda's Kitchen Halifax",
      alternateName: 'Govindas Halifax',
      description:
        'Pure Sattvik Foods, Indian Sweets, and Delicacies in Halifax, Nova Scotia',
      publisher: {
        '@id': 'https://www.govindashalifax.ca/#restaurant',
      },
      inLanguage: 'en-CA',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Pure Sattvik Delicacies. Handcrafted with Devotion. */}
      <Hero />

      {/* 2. How to Order & Collect Your Delicacies */}
      <HowToOrder />

      {/* 3. Handcrafted Delicacies & Snacks */}
      <MenuCatalog />

      {/* 4. What Makes Govinda's Food Pure & Sattvik? */}
      <SattvikExplainer />

      {/* 5. ISKCON Halifax Temple */}
      <PickupInfo />
    </>
  );
}
