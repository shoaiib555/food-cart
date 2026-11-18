import Card from "../Cards/Card";

const CardGrids = ({ ProductArr }) => {
  return (
    <div className="text-center grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 px-8 py-5">
      {ProductArr.map((product) => (
        <Card
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default CardGrids;
