import { useState } from "react";
import { IoHeart } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext";

const Card = ({ product, image, title, price }) => {
  const { addToCart, removeFromCart } = useCartContext();
  const productData = product ?? { image, title, price };

  const [isFavourite, setIsFavourite] = useState(false);
  const handeFav = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="bg-gray-100 py-2 text-center border border-amber-200 rounded-xl px-5">
      {/* card-icons`` */}
      <div className="flex justify-between">
        <button
          aria-pressed={isFavourite}
          onClick={handeFav}
          className="text-gray-300 text-2xl aria-pressed:text-red-600"
        >
          <IoHeart />
        </button>
        <button
          className=" text-sm font-semibold rounded-lg p-2 transition duration-300 hover:bg-orange-400"
          onClick={() => removeFromCart(productData.id)}
        >
          <FaMinus />
        </button>
      </div>
      {/* card-image */}
      <div className="flex justify-center w-full h-30">
        <img
          src={productData.image}
          alt={productData.title || "Product image"}
          className="h-full w-full object-contain"
        />
      </div>

      {/* card-content */}
      <div className="text-center">
        <h4 className="text-lg font-semibold">{productData.title}</h4>
        <p className="text-lg font-bold">{productData.price}</p>
      </div>

      <button
        className="bg-orange-400 text-sm font-semibold rounded-lg px-4 py-2 transition duration-300 hover:bg-orange-500"
        onClick={() => addToCart(productData)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
