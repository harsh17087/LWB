"use client";
import LWBLogo from "@/assets/images/LWB_Logo.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <header className="flex sm:flex-row justify-between items-start p-1 bg-gradient-to-r from-[#a9b2ff] via-[#ffa9f9] to-[#a9b2ff] h-24">
      <div className="flex items-center sm:mb-0 space-x-4 m-2">
        <Image
          src={LWBLogo}
          alt="Learning with basics Logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-bold text-xl">Learning with Basics</span>
      </div>
      <div className="flex items-center m-2">
        <div className="hidden sm:flex items-center">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-full w-12 border-r border-gray-600"
          >
            <FacebookOutlinedIcon
              sx={{ fontSize: 30, color: "white" }}
              className="group-hover:text-blue-600"
            />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-full w-12 border-l border-r border-gray-600"
          >
            <InstagramIcon
              sx={{ fontSize: 30, color: "white" }}
              className="group-hover:text-orange-600"
            />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-full w-12 border-l border-r border-gray-600"
          >
            <YouTubeIcon
              sx={{ fontSize: 35, color: "white" }}
              className="group-hover:text-red-600"
            />
          </Link>
        </div>
        <div className="relative flex items-center">
          <AccountCircleOutlinedIcon
            sx={{ fontSize: 30, color: "white" }}
            className="cursor-pointer ml-1 hover:text-black sm:hidden"
            onClick={(e) => setAnchorEl(e.target as HTMLElement)}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link href="/login">Login</Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link href="/register">Register</Link>
            </MenuItem>
          </Menu>
          <div className="hidden sm:flex space-x-4 ml-2">
            <Link href="/login" className="text-white hover:text-black">
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
