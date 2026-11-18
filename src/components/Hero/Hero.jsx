import HeroImg from "../../assets/hero-img2.webp";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <section className="min-h-screen py-20">
      <div
        className="max-w-7xl mx-auto px-10 pt-20 grid grid-cols-1 items-center gap-8 md:grid-cols-2"
      >
        {/* Hero-content */}
        <div className="flex flex-col items-start justify-center">
          <span className="px-4 py-2 rounded-full bg-amber-200">
            Export Best Quality..
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl/14 lg:text-6xl/20 font-bold mt-6 tracking-wide text-balance">
            The Finest Organic <span className="text-orange-400"> Fruits</span>{" "}
            & <span className="text-orange-400">Veggies</span> <br />
            In Your City
          </h1>
          <p className="mt-2 mb-4 max-w-[550px] text-pretty">
            We deliver Quailty products.Experience effortless online grocery
            shopping with our extensive selection of top-tier foods, organic
            produce, and household goods.
          </p>
          <Button content="Check Now" to="/allproducts" />
        </div>
        {/* image-part */}
        <div className="flex justify-center">
          <img
            src={HeroImg}
            alt=""
            className="w-full max-w-[300px] md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
