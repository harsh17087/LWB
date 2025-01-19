"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export interface TestimonialCardProps {
  image: StaticImageData;
  studentName: string;
  studentClass: string;
  stream: "IIT-JEE" | "NEET" | "Foundation";
  testimonial: string;
  rating?: number;
  city?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  studentName,
  studentClass,
  stream,
  testimonial,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 200;

  const shouldShowViewMore = testimonial.length > characterLimit;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-3 h-64 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={`${studentName}'s picture`}
          width={50}
          height={50}
          className="rounded-full h-12 w-12"
        />
        <div className="ml-4">
          <div className="text-lg font-bold">{studentName}</div>
          <div className="text-gray-600">{`${stream}, ${studentClass}`}</div>
        </div>
      </div>
      <div
        className={`h-36 ${isExpanded ? "overflow-y-auto" : "overflow-hidden"}`}
      >
        <p className="text-gray-800 h-full">
          &quot;
          {isExpanded
            ? testimonial
            : `${testimonial.slice(0, characterLimit)}...`}
          {shouldShowViewMore && !isExpanded && (
            <button
              className="text-blue-500 mt-2"
              onClick={() => setIsExpanded(true)}
            >
              view more
            </button>
          )}
          &quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
