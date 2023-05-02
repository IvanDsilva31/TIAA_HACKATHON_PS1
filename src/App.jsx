import React from "react";
import {
  Navbar,
  Hero,
  Footer,
  Memory,
  Explore,
  Pricings,
  Contact,
  SearchBar,
} from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data/swiftTravelData";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <SearchBar/>
      <Memory memory={memory} />
      <Explore title="Explore The Most Visited Places" placesAPI={placesAPI} />
      {/* <Advertise brands={brands} /> */}
      <Pricings pricingapi={pricingapi} />
      {/* <Banner bannerAPI={bannerAPI} /> */}
      <Contact />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
