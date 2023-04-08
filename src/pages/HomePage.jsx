import HeroCarousel from "../components/HeroCarousel/HeroCarousel";

import DefaultLayout from "../components/layout/DefaultLayout";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
    </>
  );
};

export default DefaultLayout(HomePage);
