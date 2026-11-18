import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GiThreeLeaves } from "react-icons/gi";
import valImg from "../../assets/value-img.webp";
import Heading from "../Heading/Heading";

const Values = () => {
  const values = [
    {
      id: 1,
      title: "Trust",
      description:
        "Build customer confidence with transparent sourcing, rigorous quality checks.",
      icon: <IoIosHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      description:
        "Elevate your daily meals with our hand-picked selection of farm-fresh goods",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      description:
        "We prioritize your health by following strict hygiene and cold-chain protocol to your doorstep.",
      icon: <AiTwotoneSafetyCertificate />,
    },
    {
      id: 4,
      title: "Organic Food",
      description:
        "we deliver chemical-free groceries to support a healthier lifestyle and a greener environment.",
      icon: <GiThreeLeaves />,
    },
  ];
  return (
    <section className="py-20">
      <Heading highlight="Our" heading="Values" />
      <div className="max-w-7xl mx-auto px-10 lg:px-20">
        {/* card-container */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 gap-5 pt-15">
          {/* left-values */}
          <div className="flex flex-col gap-5 mx-auto md:gap-25 justify-between max-w-xs">
            {values.slice(0, 2).map((card) => (
              <div
                key={card.id}
                className="flex gap-5 mx-auto flex-row-reverse md:flex-row"
              >
                <div className="text-left md:text-right">
                  <h4 className="text-lg font-bold">{card.title}</h4>
                  <p className="text-sm">{card.description}</p>
                </div>
                <div>
                  {" "}
                  <span className="bg-orange-500 h-10 w-10 text-2xl text-white rounded-full flex justify-center items-center">
                    {card.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* img-sec */}
          <div className="flex justify-center items-center">
            <img
              src={valImg}
              alt=""
              className="max-w-50 sm:max-w-55 lg:max-w-xs"
            />
          </div>
          {/* right-values */}
          <div className="flex flex-col gap-5 mx-auto md:gap-25 justify-between max-w-xs">
            {values.slice(2, 4).map((card) => (
              <div key={card.id} className="flex gap-5">
                <div>
                  <span className="bg-orange-500 h-10 w-10 text-2xl text-white rounded-full flex justify-center items-center">
                    {card.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{card.title}</h4>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
