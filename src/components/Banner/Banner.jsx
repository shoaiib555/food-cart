
const Banner = ({ bannerImg, heading, description }) => {
  return (
    <div
      className="h-48 sm:64 md:h-70 w-full relative bg-cover bg-center bg-no-repeat mb-20 mt-20"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-orange-400 text-2xl md:text-4xl font-bold">
          {heading}
        </h2>
        <p className="text-white max-w-150 text-center px-3 sm:px-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
