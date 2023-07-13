import Image, { StaticImageData } from "next/image";
import React from "react";

const IconFeature = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-1">
      <div className="text-center">
        <Image src={imageSrc} alt={title} />
      </div>
      <p className="text-grey-100 text-xs">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default IconFeature;
