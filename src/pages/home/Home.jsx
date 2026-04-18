import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Banner />
      <Categories />
      <SpecialDishes />
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default Home;
