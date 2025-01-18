import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";
import React from "react";
const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
      <h2 className="text-2xl mb-8 text-center">
        We&apos;d love to hear from you!
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows={4}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="mb-2 flex items-center">
              <EmailOutlinedIcon style={{ fontSize: 30, color: "purple" }} />
              <div className="ml-2">
                <p className="font-semibold">Email:</p>
                <p>webtech.lwb@gmail.com</p>
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
                    href="https://www.facebook.com"
                    passHref
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    passHref
                    className="text-pink-600 hover:text-pink-800"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    passHref
                    className="text-red-600 hover:text-red-800"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">FAQs</h3>
            <p className="mb-2 font-semibold">Q: How can I contact you?</p>
            <p className="mb-4">A: You can contact us via email or phone.</p>
            <p className="mb-2 font-semibold">
              Q: What are your working hours?
            </p>
            <p className="mb-4">
              A: Our working hours are 9 AM to 5 PM, Monday to Friday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
