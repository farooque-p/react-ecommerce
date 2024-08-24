import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            quod culpa natus, cumque omnis reprehenderit dolorum quo possimus
            necessitatibus at veniam praesentium soluta delectus libero minima.
            Quis laborum aliquam animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            quod culpa natus, cumque omnis reprehenderit dolorum quo possimus
            necessitatibus at veniam praesentium soluta delectus libero minima.
            Quis laborum aliquam animi.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            ducimus aut possimus expedita veritatis, natus veniam reprehenderit
            repellat dolorem soluta eaque similique commodi unde voluptas amet,
            maiores suscipit sint voluptates.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id,
            quod natus expedita quia quo cupiditate modi ipsa, enim libero,
            dolores ducimus dignissimos repellat corrupti culpa! Sint excepturi
            quae sunt.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id,
            quod natus expedita quia quo cupiditate modi ipsa, enim libero,
            dolores ducimus dignissimos repellat corrupti culpa! Sint excepturi
            quae sunt.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id,
            quod natus expedita quia quo cupiditate modi ipsa, enim libero,
            dolores ducimus dignissimos repellat corrupti culpa! Sint excepturi
            quae sunt.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;