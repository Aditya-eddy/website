"use client";
import React, { useEffect, useState } from "react";
import WebStories from "@/components/webstories/Webstories";
import { DummyData } from "../data";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const slug = useParams().slug;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const storyData = DummyData.find((item) => item.Slug === slug)?.Story;

  if (!storyData) {
    return <div className="m-auto"> Story not found!</div>;
  }

  useEffect(() => {
    // Setting window width when component mounts
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <div className="fixed w-full h-full top-0 z-50 flex items-center justify-center">
        <div className="absolute w-full h-full top-0 opacity-90 bg-black">
          <Image
            src={storyData[0].imageUrl as string}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="relative z-10 h-full object-cover w-full blur-2xl opacity-60 md:rounded-xl lg:rounded-xl xl:rounded-xl"
          />
        </div>
        <div className="relative flex flex-col w-full h-full justify-center">
          {windowWidth > 1024 && (
            <Link href={`/webstories`}>
              <button className="text-black font-medium bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Link>
          )}
          {storyData ? (
            <WebStories data={storyData} />
          ) : (
            <div>Content Not Available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;