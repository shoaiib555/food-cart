
const Heading = ({ highlight, heading }) => {
  return (
    <div>
      <h3 className="w-fit mx-auto text-2xl md:text-4xl font-bold">
        {" "}
        <span className="text-orange-500">{highlight}</span> {heading}
      </h3>
    </div>
  );
};

export default Heading;
