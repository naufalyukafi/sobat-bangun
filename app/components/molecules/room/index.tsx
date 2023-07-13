import React from "react";
import Card from "../../atoms/Card";
import Image from "next/image";
import Dapur from "../../../../public/images/dapur.png";

const RoomCard: React.FC = () => {
  return (
    <Card>
      <div className="relative h-40 w-full">
        <Image
          src={Dapur}
          alt="dapur"
          className="rounded-md object-cover"
          layout="fill"
        />
      </div>
      <h2 className="font-bold text-xl my-2">Ruang Makan & Dapur</h2>
      <p className="text-sm">3.0 X 2.9</p>
    </Card>
  );
};

export default RoomCard;
