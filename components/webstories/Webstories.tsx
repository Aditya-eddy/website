import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";

type WebStoryItem = {
  imageUrl: string;
  Heading: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
};

type WebStoriesProps = {
  data: WebStoryItem[];
};

const WebStories = ({ data }: WebStoriesProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const storyContainerRef = useRef<HTMLDivElement>(null); // Ref for the div

  useEffect(() => {
    // Focus on the div when the component mounts
    if (storyContainerRef.current) {
      storyContainerRef.current.focus();
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  const handlePrev = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleReplay = () => {
    setCurrentStoryIndex(0);
  };

    const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  const currentStory = data[currentStoryIndex];

  return (
    <div>
      <div
        className="relative flex flex-row h-screen gap-10 justify-center"
        style={{
          backgroundImage: `url(${currentStory.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 backdrop-filter backdrop-blur-3xl" />
        <button
          onClick={handlePrev}
          className={`relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto ${
            currentStoryIndex === 0
              ? "disabled:bg-secondary-300 disabled:text-white opacity-30 cursor-not-allowed"
              : ""
          }`}
          disabled={currentStoryIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          ref={storyContainerRef} // Attach the ref to the div
          key={currentStoryIndex}
          className="basis-4/5 md:basis-7/12 lg:basis-4/12 xl:basis-3/12 self-center h-5/6"
          onClick={handleNext}
          onKeyDown={handleKeyDown}
          tabIndex={0} // Ensure the div is focusable
        >
          <Stories
            Story={currentStory}
            totalLen={data.length}
            currentIndex={currentStoryIndex}
          />
        </div>
        {currentStoryIndex === data.length - 1 ? (
          <button
            onClick={handleReplay}
            className="relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto"
          >
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto ${
              currentStoryIndex === data.length - 1
                ? "disabled:bg-orange-600 disabled:text-orange-200 cursor-not-allowed"
                : ""
            }`}
            disabled={currentStoryIndex === data.length - 1}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebStories;
