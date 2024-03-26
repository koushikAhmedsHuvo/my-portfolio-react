import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-lg sm:text-xl md:text-2xl">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md rounded-lg overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-auto rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center mt-4">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 bg-gray-700 hover:bg-gray-800 rounded-md">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 bg-gray-700 hover:bg-gray-800 rounded-md">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
