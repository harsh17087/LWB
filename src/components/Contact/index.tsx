import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsappContactURL } from "@/Constant/common";
const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
      <h2 className="text-xl mb-8 text-center">
        We&apos;d love to hear from you!
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 px-4">
          <Link
            href={`${whatsappContactURL}`}
            passHref
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-6 rounded w-full flex items-center justify-center"
          >
            <WhatsAppIcon />
            Contact us on WhatsApp
          </Link>
          <div className="p-6 rounded-lg shadow-lg mb-8 bg-gray-100">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="mb-2 flex items-center">
              <EmailOutlinedIcon style={{ fontSize: 30, color: "purple" }} />
              <div className="ml-2">
                <p className="font-semibold">Email:</p>
                <Link
                  href="mailto:webtech.lwb@gmail.com"
                  passHref
                  className="text-blue-600 hover:text-blue-800"
                >
                  webtech.lwb@gmail.com
                </Link>
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <ConnectWithoutContactOutlinedIcon
                style={{ fontSize: 30, color: "purple" }}
              />
              <div className="ml-2">
                <p className="font-semibold">Social Media</p>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.instagram.com/learningwithbasics"
                    passHref
                    className="text-pink-600 hover:text-pink-800"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.youtube.com/@learningwithbasics8916"
                    passHref
                    className="text-red-600 hover:text-red-800"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
