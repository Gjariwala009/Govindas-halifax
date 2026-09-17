import Hero from '@/components/Hero';
import MenuCatalog from '@/components/MenuCatalog';
import SattvikExplainer from '@/components/SattvikExplainer';
import PriceListSection from '@/components/PriceListSection';
import PickupInfo from '@/components/PickupInfo';

export default function Home() {
  return (
    <>
      <Hero />
      <MenuCatalog />
      <SattvikExplainer />
      <PriceListSection />
      <PickupInfo />
    </>
  );
}
