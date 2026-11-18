import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import ProductList from "../Products/ProductList";
import CardGrids from "../CardGrids/CardGrids";

const Products = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const Categories = ["All", "Fruits", "Vegetables", "Dairy", "Meat"];

  const filteredProducts =
    selectCategory === "All"
      ? ProductList
      : ProductList.filter((product) => {
          return (
            product.category?.toLowerCase().trim() ===
            selectCategory.toLowerCase().trim()
          );
        });
  const renderProducts = filteredProducts.slice(0, 10);

  return (
    <section className="py-5 sm:py-20">
      <div className="max-w-7xl mx-auto px-10">
        <Heading highlight="Our" heading="Products" />
        {/* categories------------------------------- */}
        <div className="flex flex-wrap justify-center gap-5 pt-10">
          {Categories.map((category) => (
            <button
              onClick={() => setSelectCategory(category)}
              className={`px-5 py-2 rounded-lg transition duration-300 ${category === "All" ? "bg-orange-400" : "bg-gray-100 hover:bg-orange-400"}`}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <CardGrids ProductArr={renderProducts} />
        <div className="text-center pt-8">
          <Button content="View All" to="/allproducts" />
        </div>
      </div>
    </section>
  );
};

export default Products;
