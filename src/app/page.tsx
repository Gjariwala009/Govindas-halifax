import Hero from '@/components/Hero';
import HowToOrder from '@/components/HowToOrder';
import MenuCatalog from '@/components/MenuCatalog';
import SattvikExplainer from '@/components/SattvikExplainer';
import PriceListSection from '@/components/PriceListSection';
import PickupInfo from '@/components/PickupInfo';

export default function Home() {
  return (
    <>
      {/* 1. Pure Sattvik Delicacies. Handcrafted with Devotion. */}
      <Hero />

      {/* 2. How to Order & Collect Your Delicacies */}
      <HowToOrder />

      {/* 3. Handcrafted Delicacies & Snacks */}
      <MenuCatalog />

      {/* 4. What Makes Govinda's Food Pure & Sattvik? */}
      <SattvikExplainer />

      {/* 5. Govinda's Retail Price List */}
      <PriceListSection />

      {/* 6. ISKCON Halifax Temple */}
      <PickupInfo />
    </>
  );
}
