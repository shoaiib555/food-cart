import React, { useState } from "react";
import AllProductBanner from "../../assets/all-banner.jpg";
import Banner from "../../components/Banner/Banner";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgEditStraight } from "react-icons/cg";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzeewyzz");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const customSubmit = (e) => {
    e.preventDefault();

    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Please enter your name";
    } else if (formData.name.length < 2) {
      newError.name = "Name must be at least 2 characters long";
    }
    if (!formData.email.trim()) {
      newError.email = "Please enter the email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newError.subject = "Please enter subject";
    }
    if (!formData.message.trim()) {
      newError.message = "Please write your message";
    }

    setError(newError);
    if (Object.keys(newError).length > 0) {
      return;
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    handleSubmit(e);
  };
  if (state.succeeded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-green-600">
          Form Submitted Successfully!
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          Thank you for contacting us. We’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <section>
      <Banner
        bannerImg={AllProductBanner}
        heading="Contact Us"
        description="We deliver Quailty products.Experience effortless online grocery shopping with our Quality Food"
      />
      <div className="max-w-7xl mx-auto px-10">
        {/*=========== form section ===================*/}
        <div className="w-full max-w-120 md:max-w-200 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] mx-auto shadow-gray-300 shadow-xl rounded-xl overflow-hidden">
          {/* 1----------- Get in Touch ---------------*/}
          <div className="p-7 bg-amber-50 border-r border-amber-300">
            <h3 className="text-2xl text-zinc-900 font-bold">Get in Touch</h3>
            <p className="text-zinc-700 mb-5">
              Get in touch and Reach out with any questions or feedback. We are
              always ready to help.
            </p>
            {/*card 1  address   */}
            <div className="flex gap-4 mt-3">
              <span className="bg-blue-700 h-8 w-8 rounded-full text-white text-xl not-last:flex justify-center items-center mt-2">
                <FiMapPin />
              </span>
              {/* addres heading+adress */}
              <div>
                <h4 className="text-zinc-900 text-base font-bold">
                  Head Office
                </h4>
                <p className="w-full max-w-50 text-zinc-700">
                  5-A azzz New Model Town Multan, punjab, Pakistan
                </p>
              </div>
            </div>
            {/* Email  */}
            <div className="flex gap-3 mt-3">
              <span className="bg-blue-700 h-8 w-8 rounded-full text-white text-xl not-last:flex justify-center items-center mt-2">
                <MdOutlineEmail />
              </span>

              <div>
                <h4 className="text-zinc-900 text-base font-bold">E-Mail</h4>
                <p className="max-w-50 text-zinc-700">support@foodcart5.com</p>
              </div>
            </div>
            {/* Call us */}
            <div className="flex gap-3 mt-3">
              <span className="bg-blue-700 h-8 w-8 rounded-full text-white text-xl not-last:flex justify-center items-center mt-2">
                <PiPhoneCall />
              </span>
              {/* addres heading+adress */}
              <div>
                <h4 className="text-zinc-900 text-base font-bold">Call Us</h4>
                <p className="max-w-50 text-zinc-700">
                  Phone: +92 061 5467557 Fax: +92 56567576
                </p>
              </div>
            </div>
            {/* social media icons */}
            <div className="mt-5">
              <h4 className="text-zinc-900 text-base font-bold">Follow us</h4>
              <div className="flex gap-1 mt-3">
                <span className="text-xl bg-blue-800 text-white h-7 w-7 rounded-full flex justify-center items-center">
                  <TiSocialFacebook />
                </span>
                <span className="text-xl bg-blue-800 text-white h-7 w-7 rounded-full flex justify-center items-center">
                  <FaXTwitter />
                </span>
                <span className="text-xl bg-blue-800 text-white h-7 w-7 rounded-full flex justify-center items-center">
                  <FaWhatsapp />
                </span>
                <span className="text-xl bg-blue-800 text-white h-7 w-7 rounded-full flex justify-center items-center">
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>
          {/*===============  Form  =============*/}
          <form onSubmit={customSubmit} noValidate>
            <div className="p-8">
              <h3 className="text-3xl text-zinc-900 font-bold">
                Send us a message
              </h3>
              {/* input-fields */}
              <div className="mt-10">
                {/*------- name & email part----- */}
                <div className="flex gap-5">
                  {/* name */}
                  <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="Enter Name"
                      onChange={handleChange}
                      className="w-full outline-0 px-3 py-2 bg-gray-100 rounded-lg"
                    />

                    {error.name && (
                      <p className="text-red-500 text-sm mt-1">{error.name}</p>
                    )}
                  </div>
                  {/* email */}
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter Email"
                      onChange={handleChange}
                      className="w-full outline-0 px-3 py-2 bg-gray-100 rounded-lg"
                    />
                    {error.email && (
                      <p className="text-red-500 text-sm mt-1">{error.email}</p>
                    )}
                  </div>
                </div>
                {/* message */}
                <div className="flex flex-col mt-2">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    placeholder="Enter Subject"
                    onChange={handleChange}
                    className="w-full outline-0 px-3 py-2 bg-gray-100 rounded-lg"
                  />
                  <p className="text-red-500 text-sm mt-1">{error.subject}</p>
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Enter message"
                    rows="5"
                    onChange={handleChange}
                    className="w-full outline-0 px-3 py-2 bg-gray-100 rounded-lg"
                  />
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-sm font-semibold rounded-lg hover:bg-orange-400 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 mt-5"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* ----form-message end---- */}
            </div>
          </form>
        </div>
        {/*------ Map -------*/}
        <div className="w-full max-w-120 md:max-w-[950px] h-[350px] mx-auto mt-30 border-2 border-amber-400 rounded-sm shadow-sm">
          <iframe
            src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220732.73778487786!2d71.3098429083412!3d30.18144999857207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b315778dea7d9%3A0xbad72fc74e55d42f!2sMultan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1788286396077!5m2!1sen!2s"
            title="Location Map"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
