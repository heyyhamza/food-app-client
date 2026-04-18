import React from "react";
import bannerImg from "/images/home/banner.png";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#f8fafc] to-[#ffffff]">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            className="rounded-full shadow-xl"
            src={bannerImg}
            alt="Food Banner"
          />

          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-4 py-3 rounded-2xl flex items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-xl w-14"
              />
              <div>
                <h5 className="font-semibold">Cheese Burger</h5>
                <p className="text-orange-500">$14.00</p>
              </div>
            </div>

            <div className="bg-white px-4 py-3 rounded-2xl hidden md:flex items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food2.png"
                alt=""
                className="rounded-xl w-14"
              />
              <div>
                <h5 className="font-semibold">Chicken Biryani</h5>
                <p className="text-orange-500">$18.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug">
            Fresh Food Delivered Fast To Your
            <span className="text-green-600"> Doorstep</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Browse your favorite meals, place orders instantly, and enjoy quick
            delivery with secure online payments.
          </p>

          <button className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-full font-semibold">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
