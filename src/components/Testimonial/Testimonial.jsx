import Heading from "../Heading/Heading";
import React from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../../assets/customer1.webp";
import image2 from "../../assets/customer2.webp";
import image3 from "../../assets/customer3.webp";
import image4 from "../../assets/customer4.webp";
import image5 from "../../assets/customer5.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl px-10 mx-auto">
        <Heading highlight="Customer" heading="Reviews" />
        {/* swiper---------- */}
        <div className="py-6 mt-20 px-10 border-b-3 border-orange-500">
          <div className="flex gap-2 justify-end pb-5">
            <button className="prevBtn w-10 h-10 text-4xl bg-gray-200 rounded-sm hover:bg-amber-500">
              <MdNavigateBefore />
            </button>
            <button className="nextBtn w-10 h-10 text-4xl bg-gray-200 rounded-sm flex justify-center items-center hover:bg-amber-500">
              <MdNavigateNext />
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
          >
            {customerList.map((customer) => {
              return (
                <SwiperSlide
                  key={customer.id}
                  className="py-8 px-5 bg-gray-200 shadow-2xl rounded-lg border border-amber-200"
                >
                  <div className="flex gap-2">
                    {/* image */}
                    <div className="flex justify-center items-center w-16 h-16 rounded-full border border-orange-500">
                      <img
                        src={customer.image}
                        alt=""
                        className="w-14 h-14 rounded-full"
                      />
                    </div>
                    {/* content */}
                    <div className="">
                      <h5 className="text-lg font-medium">{customer.name}</h5>
                      <h5 className="text-sm">{customer.role}</h5>

                      <div className="flex gap-1 text-sm text-yellow-400">
                        {[1, 2, 3, 4, 5].map((item) => {
                          return customer.rating >= item ? <FaStar /> : "";
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm pt-5">{customer.reveiw}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const customerList = [
  {
    id: 1,
    image: image1,
    name: " Sarah Alex",
    role: " Blogger",
    reveiw:
      "This website makes ordering street food an absolute breeze with its live location tracker and seamless mobile checkout.",
    rating: 5,
  },
  {
    id: 2,
    image: image2,
    name: "David Wilson",
    role: "Writer",
    reveiw:
      "This website makes ordering street food an absolute breeze with its live location tracker and seamless mobile checkout.",
    rating: 4,
  },
  {
    id: 3,
    image: image3,
    name: " Emily Davis",
    role: " fashion designer",
    reveiw:
      "This website makes ordering street food an absolute breeze with its live location tracker and seamless mobile checkout.",
    rating: 5,
  },
  {
    id: 4,
    image: image4,
    name: "James David",
    role: "Chef",
    reveiw:
      "This website makes ordering street food an absolute breeze with its live location tracker and seamless mobile checkout.",
    rating: 5,
  },
  {
    id: 5,
    image: image5,
    name: "Jessica Taylor",
    role: "modal",
    reveiw:
      "This website makes ordering street food an absolute breeze with its live location tracker and seamless mobile checkout.",
    rating: 4,
  },
];
