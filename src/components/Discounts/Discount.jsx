import discImg from "../../assets/fresh-fruits.webp";

const Discount = () => {
  return (
    <section className="py-5 sm:py-20">
      <div className="relative max-w-7xl mx-auto px-10 flex flex-col lg:flex-row lg:items-center py-5 lg:py-15 bg-gray-100">
        <div
          className="hidden sm:block absolute inset-0 bg-contain bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${discImg})` }}
        ></div>

        <span className="text-5xl sm:text-6xl rotate-0 lg:-rotate-90 md:text-8xl font-bold text-orange-500 h-fit tracking-wider">
          20%
        </span>

        <div className="max-w-[500px] lg:max-w-[700px] text-balance">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            First Order Discount
          </h3>
          <p className="pt-2 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            quas totam dicta, enim reprehenderit itaque quas totam dicta, enim
            reprehenderit itaque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discount;
