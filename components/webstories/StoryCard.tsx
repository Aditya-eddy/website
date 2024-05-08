import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type StoryCardProps = {
  imagesrc: string | StaticImageData;
  CardDescription: string;
  slug: string;
  categories: string[];
};

const StoryCard = ({
  imagesrc,
  CardDescription,
  slug,
  categories,
}: StoryCardProps) => {
  const key = `${slug}-${categories.join("-")}`;

  return (
    <div
      key={key}
      className="flex flex-col items-center justify-center border border-gray-300 bg-gray-100 rounded-md mx-auto hover:shadow-lg hover:shadow-gray-500 duration-150 h-full"
     >
      <Link target="_blank" href={`/webstories/${slug}`} className="flex-grow">
        <div className="flex h-80"> {/* Image container, 70% of parent height */}
          <Image
            src={imagesrc}
            alt={CardDescription}
            className="w-full h-full object-fill rounded-t-md" // Using object-cover to fill the container
          />
        </div>
        <div className="p-3">
          <p>{CardDescription}</p>
        </div>
        <div className="flex flex-row gap-2 p-1 m-2 justify-end">
          {categories.map((category, index) => (
            <p key={index} className="text-xs text-gray-500">
              {category}
            </p>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
