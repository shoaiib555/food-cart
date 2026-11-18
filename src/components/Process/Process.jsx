import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";
import Heading from "../Heading/Heading";

const Process = () => {
  const processList = [
    {
      id: 1,
      number: <TbCircleNumber1Filled />,
      title: "Sourcing",
      icon: <FaCanadianMapleLeaf />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae.",
    },
    {
      id: 2,
      number: <TbCircleNumber2Filled />,
      title: "Sourcing",
      icon: <GiFactory />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae.",
    },
    {
      id: 3,
      number: <TbCircleNumber3Filled />,
      title: "Sourcing",
      icon: <SlBadge />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae.",
    },
    {
      id: 4,
      number: <TbCircleNumber4Filled />,
      title: "Sourcing",
      icon: <CiDeliveryTruck />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae.",
    },
  ];
  return (
    <section className="py-20">
      <Heading highlight="Our" heading="Process" />

      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 pt-15">
        {processList.map((item, index) => (
          <div key={item.id} className={index % 2 == 0 ? "md:pt-40" : ""}>
            <span className="w-13 h-13 mx-auto border-3 border-dashed border-orange-500 rounded-full text-5xl flex justify-center items-center">
              {item.number}
            </span>

            <div className="flex gap-3 items-center pt-8 mx-auto">
              <span className="w-12 h-12 text-3xl p-2 bg-orange-500 rounded-full flex justify-center items-center">
                {item.icon}
              </span>
              <div className="">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
