import React from "react";
import { useParams } from "react-router";
import ProdcutList from "../../components/Products/ProductList";
import Card from "../../components/Cards/Card";
import { Link } from "react-router";
import Banner from "../../components/Banner/Banner";
import catBannerImg from "../../assets/all-banner.jpg";

const CategoryDetails = () => {
  // const { id } = useParams();
  const { category } = useParams();
  const filterProducts = ProdcutList.filter((product) => {
    return product.category.toLowerCase() === category.toLowerCase();
  });
  return (
    <section className="">
      <Banner
        bannerImg={catBannerImg}
        heading={`${category} Products `}
        description="We deliver Quailty products.Experience effortless online grocery shopping with our Quality Foods"
      />

      {/* <Heading heading="Product Details" /> */}
      <div className="max-w-7xl mx-auto px-10">
        {/* card-grid */}
        <div className="text-center grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-center gap-5 px-8 py-5">
          {filterProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <Link
          className="block mt-5 text-blue-900 hover:underline"
          to="/categories"
        >
          Back to Categories
        </Link>
      </div>
    </section>
  );
};

export default CategoryDetails;
