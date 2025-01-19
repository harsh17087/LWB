import React from "react";
import Image from "next/image";
import SKJImage from "@/assets/images/LWB_SKJ.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Introduction.css";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import Link from "next/link";
const InfoBadge: React.FC = () => {
  return (
    <div className="info-badge inline-flex items-center bg-white p-2 rounded-lg shadow-md animate-float">
      <SchoolIcon className="text-blue-500" />
      <div className="ml-2">
        <p className="text-sm font-bold">200+ Courses</p>
        <p className="text-xs">Courses & Video</p>
      </div>
    </div>
  );
};

const InfoBadge2: React.FC = () => {
  return (
    <div className="info-badge inline-flex items-center bg-white p-2 rounded-lg shadow-md animate-float">
      <PeopleIcon className="text-blue-500" />
      <div className="ml-2">
        <p className="text-sm font-bold">100%</p>
        <p className="text-xs">Satisfied Students</p>
      </div>
    </div>
  );
};

const InfoBoxWithArrow: React.FC = () => {
  return (
    <div className="info-box-with-arrow bg-white p-4 rounded-lg shadow-md relative">
      <p className="text-sm ">
        Dear Learner&rsquo;s <br />
        Learn everything here from scratch
      </p>
      <p className="text-sm font-bold">- Suraj Kumar (Founder)</p>
      <div className="arrow"></div>
    </div>
  );
};

const Introduction: React.FC = () => {
  return (
    <div className="mt-3 introduction-container bg-[#d4ddf5] p-4 flex flex-col sm:flex-row items-center justify-evenly rounded-lg h-[24rem] sm:h-[30rem]">
      <div className="text-content flex-1 space-y-6 sm:w-3/5 sm:space-y-12">
        <p className="text-2xl sm:text-5xl font-bold mb-4 text-center sm:text-left">
          Find Your Perfect Courses & Improve Your Skills
        </p>
        <p className="text-sm sm:text-lg mb-4 text-center sm:text-left">
          Comprehensive video lectures, student success stories and personalized
          learning experience to help excel in your journey.
        </p>
        <div className="button-group flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <Link
            href="https://www.youtube.com/@learningwithbasics8916"
            passHref
            className="bg-[#6c7bfe] text-white py-2 px-4 rounded-3xl cursor-pointer transition duration-300 transform hover:bg-[#6171fd] hover:scale-105 flex items-center text-sm sm:text-base"
          >
            Explore Video Library&nbsp;
            <ArrowCircleRightIcon />
          </Link>
          <Link
            href="#"
            passHref
            className="btn-secondary text-sm sm:text-base"
          >
            Explore Success Stories&nbsp;
            <ArrowCircleRightIcon />
          </Link>
        </div>
      </div>
      <div
        className="image-content relative hidden sm:block overflow-hidden sm:w-2/5 place-items-end mb-4 mr-4"
        style={{ height: "350px" }}
      >
        <Image
          src={SKJImage}
          height={300}
          width={300}
          alt="Learning with basics Founder Image"
          className="rounded-lg object-cover"
          style={{ objectPosition: "top" }}
        />
        <div className="absolute bottom-0 right-5 m-2 hover:transform hover:scale-105 transition-transform duration-300">
          <InfoBadge2 />
        </div>
        <div className="infobadge-2 top-10 absolute m-2 hover:transform hover:scale-105 transition-transform duration-300">
          <InfoBadge />
        </div>
        <div className="absolute bottom-5 left-0 m-2 hover:transform hover:scale-105 transition-transform duration-300">
          <InfoBoxWithArrow />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
