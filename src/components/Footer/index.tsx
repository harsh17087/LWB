import React from "react";
import Link from "next/link";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
            <Link href="/privacy-policy" className="footer-link text-sm md:text-base">Privacy Policy</Link>
            <Link href="/terms-of-use" className="footer-link text-sm md:text-base">Terms of Use</Link>
        </div>
        <div className="footer-right text-sm md:text-base">
          &copy;&nbsp; Learning with Basics 2025
        </div>
      </footer>
    </>
  );
};

export default Footer;
