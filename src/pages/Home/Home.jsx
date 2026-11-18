import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../Categories/Categories";
import Values from "../../components/Values/Values";
import Products from "../../components/Products/Products";
import Discount from "../../components/Discounts/Discount";
import Process from "../../components/Process/Process";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonial />
    </div>
  );
};

export default Home;
