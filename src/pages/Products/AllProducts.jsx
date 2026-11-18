import React, { useState } from "react";
import ProductList from "../../components/Products/ProductList";
import CardGrids from "../../components/CardGrids/CardGrids";
import { Link, useSearchParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import AllProductBanner from "../../assets/all-banner.jpg";

const AllProducts = () => {
  const [searchParam] = useSearchParams();
  const search = searchParam.get("search") || "";
  const filteredProdcuts =
    search === ""
      ? ProductList
      : ProductList.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <section>
      <Banner
        bannerImg={AllProductBanner}
        heading="All Products"
        description="We deliver Quailty products.Experience effortless online grocery shopping with our Quality Foods"
      />
      <div className="max-w-7xl mx-auto px-10">
        <CardGrids ProductArr={filteredProdcuts} />
        <Link className="block mt-6 text-blue-900 hover:underline" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default AllProducts;
