import React from "react";
import Image from "next/image";
import SKJImage from "@/assets/images/LWB_SKJ.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Introduction.css";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
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
      <p className="text-sm ">Dear Learner&rsquo;s <br/>Learn everything here from scratch</p>
      <p className="text-sm font-bold">- Suraj Kumar (Founder)</p>
      <div className="arrow"></div>
    </div>
  );
};

const Introduction: React.FC = () => {
  return (
    <div className="mt-3 introduction-container bg-[#d4ddf5] p-4 flex flex-col sm:flex-row items-center justify-evenly rounded-lg">
      <div className="text-content flex-1 sm:w-3/5 space-y-6">
        <p className="text-5xl font-bold mb-4">
          Find Your Perfect Courses & Improve Your Skills
        </p>
        <p className="text-lg mb-4">
          Comprehensive video lectures, student success stories and personalized
          learning experience to help excel in your journey.
        </p>
        <div className="button-group flex gap-4 ">
          <button className="btn-primary">
            Explore Video Library&nbsp;
            <ArrowCircleRightIcon />
          </button>
          <button className="btn-secondary">
            Explore Success Stories&nbsp;
            <ArrowCircleRightIcon />
          </button>
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
