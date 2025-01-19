"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import "./TestimonialCard.css";
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
  city,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-3 h-72 transform transition-transform duration-300 hover:scale-105">
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
          {city && <div className="text-gray-600">{city}</div>}
        </div>
      </div>
      <div className="h-36 overflow-y-auto testimonial-content">
        <p className="text-gray-800 h-full">&quot;{testimonial}&quot;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
