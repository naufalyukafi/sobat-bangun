import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import AccountCircle from "../../../../public/images/account-circle.png";

const Testimony = () => {
  return (
    <div className="flex mb-4">
      <div className="flex-shrink-0 w-12 h-12">
        <Image src={AccountCircle} alt="John" className="object-cover" />
      </div>
      <div className="ml-4">
        <div className="flex items-center mb-2">
          <h4 className="text-base font-semibold">John Doe</h4>
          <span className="mx-2 text-gray-500">|</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-sm">4.5</span>
          </div>
        </div>
        <p className="text-gray-600 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          facilisis ultricies purus at ullamcorper.
        </p>
      </div>
    </div>
  );
};

export default Testimony;
