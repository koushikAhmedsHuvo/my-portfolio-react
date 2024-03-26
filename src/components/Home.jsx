import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            I'm a Web Development Enthusiast
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md mb-6">
            I have 8 months of experience building and designing websites.
            Currently, I love to work on web applications using technologies
            like React and Tailwind.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/3 md:w-1/2 lg:w-1/2 mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
