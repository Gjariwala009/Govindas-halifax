import Hero from '@/components/Hero';
import MenuCatalog from '@/components/MenuCatalog';
import ZeffyShopSection from '@/components/ZeffyShopSection';
import SattvikExplainer from '@/components/SattvikExplainer';
import PriceListSection from '@/components/PriceListSection';
import PickupInfo from '@/components/PickupInfo';

export default function Home() {
  return (
    <>
      <Hero />
      <MenuCatalog />
      <ZeffyShopSection />
      <SattvikExplainer />
      <PriceListSection />
      <PickupInfo />
    </>
  );
}
