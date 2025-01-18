"use client";
import { VideoLibraryButtons } from "@/mocks/VideoLibrary/Buttons";
import Link from "next/link";
import React, { useState } from "react";

const VideoLibrary: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center mb-4">
        <Link
          href="https://www.youtube.com/@learningwithbasics8916"
          passHref
          className="text-3xl font-bold text-center hover:text-red-500 transition-colors duration-300"
        >
          Video Library
        </Link>
      </div>
      <p className="text-center text-lg mb-4">
        Explore our comprehensive collection of video lectures, tutorials, and
        more
      </p>

      <div className="flex justify-center space-x-2 mb-4 mt-4">
        {VideoLibraryButtons.map((button) => (
              <button
              key={button.id}
              className={`px-2 py-1 rounded-3xl ${
                activeButton === button.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
              } md:px-4 md:py-2`}
              onClick={() => handleClick(button.id)}
              >
              {button.title}
              </button>
        ))}
      </div>
      <p className="text-xl text-center mb-4 text-gray-500">Coming Soon ...</p>
    </div>
  );
};

export default VideoLibrary;
