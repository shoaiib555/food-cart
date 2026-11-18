import React from "react";
import { Link } from "react-router";
import fruitImg from "../../assets/fruits-veggies.webp";
import dairyImg from "../../assets/dairy-eggs.webp";
import meatImg from "../../assets/meat-seefood.webp";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import CategoryDetails from "../Categories/CategoryDetails";

const Categories = () => {
  const categoryList = [
    {
      id: 1,
      image: fruitImg,
      title: "Fruits and Vaggies",
      category: "Fruits",
      description:
        " Add vibrant freshness and daily nutrition to your cart with fresh fruts and vegetables. ",
    },
    {
      id: 2,
      image: dairyImg,
      title: "Dairy",
      category: "Dairy",
      description:
        "Add vibrant freshnedd and daily nutrition to your cart with fresh fruts and vegetables.",
    },
    {
      id: 3,
      image: meatImg,
      title: "Meat & Prodcuts",
      category: "Meat",
      description:
        " Add vibrant freshnedd and daily nutrition to your cart with fresh fruts and vegetables. ",
    },
  ];
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <Heading text highlight="Shop" heading="by Category" />

        {/* card-container */}
        <div className="pt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* card */}
          {categoryList.map((card) => (
            <div
              key={card.id}
              className="max-w-xs mx-auto pt-3 border border-amber-100 shadow-2xl rounded-2xl overflow-hidden"
            >
              <img
                src={card.image}
                alt=""
                className="w-full h-40 mx-auto object-contain"
              />
              <div className="bg-gray-100 p-4">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm pb-3">{card.description}</p>
                <Button content="See All" to={`/categories/${card.category}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
