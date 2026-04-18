import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Course",
    description: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Breakfast",
    description: "(12 items)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Desserts",
    description: "(48 items)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    description: "(255 items)",
    image: "/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-xl bg-white py-6 px-5 w-72 text-center cursor-pointer hover:-translate-y-3 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>

            <div className="mt-5 space-y-1">
              <h5 className="text-[#1E1E1E] font-semibold text-lg">
                {item.title}
              </h5>
              <p className="text-secondary text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
