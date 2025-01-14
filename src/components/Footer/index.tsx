import React from "react";
import Link from "next/link";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
        <div className="footer-right">
          &copy;&nbsp; Learning with Basics 2025
        </div>
      </footer>
    </>
  );
};

export default Footer;
