import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router";
import { useForm } from "@formspree/react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("mzeewyzz");

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      alert(`Thank you for subscribing! ${email}`);
      setEmail("");
    }
  }, [state.succeeded]);

  return (
    <section className="pt-10 mt-20 bg-gray-200">
      <div className="max-w-7xl px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-5">
        {/* brand */}
        <div className="">
          <a href="/" className="text-3xl font-bold tracking-wider">
            <span className="text-orange-500">Food</span>
            Cart
          </a>
          <p className="mt-5 tracking-wide text-balance">
            We deliver Quailty products.Experience effortless online grocery
            shopping with our extensive selection of top-tier foods, organic
            produce, and household goods organic produce, and household goods.
          </p>
        </div>
        {/* company */}
        <div className="flex flex-col mt-5 sm:mt-0">
          <h4 className="mx-auto text-lg font-bold">Company</h4>
          <ul className="mx-auto mt-3 space-y-3">
            <li>
              <Link
                className="tracking-wider hover:text-orange-500"
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="tracking-wider hover:text-orange-500"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="tracking-wider hover:text-orange-500" to="/">
                Products
              </Link>
            </li>
          </ul>
        </div>
        {/* support */}
        <div className="flex flex-col mt-5 sm:mt-0">
          <h4 className="mx-auto text-lg font-bold">Support</h4>
          <ul className="mx-auto mt-3 space-y-3">
            <li>
              <Link
                className="tracking-wider hover:text-orange-500"
                to="/termsconditins"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                className="tracking-wider hover:text-orange-500"
                to="/privacypolicy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="tracking-wider hover:text-orange-500"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Get in touch */}
        <div className="flex flex-col mt-10 sm:mt-0">
          <h4 className="mx-auto text-lg font-bold">Get in Touch</h4>
          <p className="my-2">
            Subscribe to our newsletter for fresh foods delivered to yoour door
            step!
          </p>
          {/*Get-in-touch > input-form */}
          <form onSubmit={handleCustomSubmit}>
            <div className="flex gap-1 p-1 mx-auto bg-white rounded-md max-w-50">
              <input
                type="text"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="outline-0 w-full"
              />

              <button
                type="submit"
                className="p-1 bg-amber-500 hover:bg-amber-300 rounded-md"
              >
                <MdNavigateNext className="text-xl font-bold mx-auto" />
              </button>
            </div>
          </form>
          {/* sm icons */}
          <div className="flex space-x-4 mt-5 mx-auto">
            <a href="https://www.facebook.com/" className="">
              <FaFacebook className="text-2xl text-blue-800 transform hover:scale-110 transition duration-300" />
            </a>
            <a href="https://twitter.com/" className="">
              <FaXTwitter className="text-2xl transform hover:scale-110 transition duration-300" />
            </a>
            <a href="https://wa.me/1234567890" className="">
              <IoLogoWhatsapp className="text-2xl text-green-600 transform hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-10 mx-auto mt-5 py-3 border-t border-gray-300">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Food Cart. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
