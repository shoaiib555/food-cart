import { Link } from "react-router";

const Button = ({ to, content }) => {
  return (
    <Link
      className="custom-Btn bg-orange-400 text-xs sm:text-sm font-semibold rounded-lg px-3 py-2 sm:px-4 sm:py-2 transition-transform duration-300 hover:bg-orange-500"
      to={to}
    >
      {content}
    </Link>
  );
};

export default Button;
