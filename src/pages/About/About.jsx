import React from "react";
import Banner from "../../components/Banner/Banner";
import AboutBannerImg from "../../assets/all-banner.jpg";
import historyImg from "../../assets/aboutImage.jpg";
import Button from "../../components/Button/Button";
import Values from "../../components/Values/Values";
import Process from "../../components/Process/Process";

const About = () => {
  return (
    <section>
      <Banner
        bannerImg={AboutBannerImg}
        heading="About Us"
        description="FoodCart is an online food ordering platform that allows customers to browse food items, view product information, add items to their cart, and place orders."
      />
      <div className="max-w-7xl mx-auto px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20">
          {/* story img */}
          <div className="flex justify-center items-center w-full max-w-[600px] md:max-w-full mx-auto">
            <img
              src={historyImg}
              alt=""
              className="inline-block w-full rounded-lg shadow-2xl shadow-amber-200 object-cover"
            />
          </div>
          {/* content */}
          <div className="">
            <p className="mb-3 font-medium uppercase tracking-wider text-orange-500">
              {" "}
              Who We Are{" "}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              {" "}
              Good Food Made Simple{" "}
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              FoodCart started with a simple idea: ordering good food should be
              easy, convenient, and enjoyable. We noticed that finding fresh
              meals, choosing the right items, and placing an order could
              sometimes feel more complicated than it needed to be.
            </p>{" "}
            <p className="mt-4 leading-7 text-gray-600">
              What began as a small idea grew from a passion for good food and a
              desire to make everyday food ordering simpler. We wanted to create
              a place where people could discover delicious meals, explore
              different choices, and order their favorites without unnecessary
              steps.
            </p>{" "}
            <p className="mt-4 leading-7 text-gray-600">
              Today, FoodCart continues to grow with the same idea that started
              it all: good food brings people together, and getting it should be
              simple.
            </p>
            <div className="mt-8">
              <Button content="Explore Products" to="/allproducts" />
            </div>
          </div>
        </div>
        {/* values component */}
        <Values />
        {/* Process component */}
        <Process />
      </div>
    </section>
  );
};

export default About;
