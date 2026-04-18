import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { AuthContext } from "../contexts/AuthProvider";
import useCart from "../hooks/useCart";

const Cards = ({ item }) => {
  const { _id, name, image, price, recipe, description } = item;

  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = async () => {
    if (user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/carts`,
          cartItem,
        );

        if (response.data) {
          refetch();

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item added to cart",
            showConfirmButton: false,
            timer: 1400,
          });
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error?.response?.data?.message || "Unable to add item to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: "Please login to continue",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-white shadow-xl rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 mx-2 my-5">
      {/* Favorite Icon */}
      <button
        onClick={toggleFavorite}
        className={`absolute right-4 top-4 z-10 p-3 rounded-full ${
          isFavorite ? "bg-white text-rose-500" : "bg-green text-white"
        }`}
      >
        <FaHeart className="w-4 h-4" />
      </button>

      {/* Image */}
      <Link to={`/menu/${_id}`}>
        <figure className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover hover:scale-110 transition duration-500"
          />
        </figure>
      </Link>

      {/* Content */}
      <div className="card-body">
        <Link to={`/menu/${_id}`}>
          <h2 className="card-title text-xl font-bold hover:text-green transition">
            {name}
          </h2>
        </Link>

        <p className="text-gray-500 text-sm line-clamp-2">
          {recipe || description || "Delicious freshly prepared meal."}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <h5 className="font-bold text-lg">
            <span className="text-red-500">$</span> {price}
          </h5>

          <button
            onClick={handleAddToCart}
            className="btn bg-green text-white border-none hover:bg-green-700 rounded-full px-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
