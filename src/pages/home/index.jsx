import React from "react";
import Navbar from "../../components/navigation";
import Hero from "../../components/heroSection";
import Popular from "../../components/popular";
import Offers from "../../components/offerBanner";
import NewCollection from "../../components/newCollection";
import NewsSubscription from "../../components/newsLetter";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div style={{width:"100%", height:"max-content"}}>
      <Navbar />
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsSubscription />
      <Footer />
    </div>
  );
};

export default Home;
