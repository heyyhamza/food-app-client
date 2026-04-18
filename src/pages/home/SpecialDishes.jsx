/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Cards from "../../components/Cards";

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const featuredItems = data.filter(
          (item) => item.category === "popular",
        );
        setRecipes(featuredItems);
      })
      .catch((error) => console.error("Failed to load menu:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
      {/* Heading */}
      <div className="text-left">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Featured Dishes</h2>
      </div>

      {/* Navigation Buttons */}
      <div className="md:absolute right-3 top-8 mb-10 md:mr-24 flex gap-4">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="btn p-2 rounded-full border hover:bg-gray-100"
        >
          <FaAngleLeft className="h-6 w-6" />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="btn p-2 rounded-full bg-green text-white hover:bg-green-700"
        >
          <FaAngleRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="overflow-hidden mt-10">
        {recipes.map((item) => (
          <div key={item._id || item.id} className="px-3">
            <Cards item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
