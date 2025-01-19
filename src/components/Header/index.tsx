'use client'
import LWBLogo from "@/assets/images/LWB_Logo.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 mt-4 flex sm:flex-row justify-between items-center p-1 sm:mx-4 my-4 shadow-lg shadow-t-lg rounded-3xl bg-white z-50">
      <Link href="/" className="flex items-center sm:mb-0 space-x-4 m-1">
        <Image
          src={LWBLogo}
          alt="Learning with basics Logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-bold text-base sm:text-xl">Learning with Basics</span>
      </Link>
      <div className="flex items-center m-2">
        <div className="hidden sm:flex items-center">
          <Link
            href="https://www.instagram.com/learningwithbasics"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-full w-12 border-gray-600"
          >
            <InstagramIcon
              sx={{ fontSize: 30, color: "#F56040" }}
              className="group-hover:text-orange-600"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@learningwithbasics8916"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-full w-12 border-l border-r border-gray-600"
          >
            <YouTubeIcon
              sx={{ fontSize: 35, color: "red" }}
              className="group-hover:text-red-600"
            />
          </Link>
        </div>
        <div className="relative flex items-center">
          <div className=" sm:flex space-x-4 ml-2">
            <Link href="/login" className="text-black hover:text-blue-500">
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
