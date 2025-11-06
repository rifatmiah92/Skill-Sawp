import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white text-xl font-semibold">SkillSwap</h3>
          <p className="text-sm mt-2">Local skills. Local people. Learn and trade skills nearby.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">info@skillswap.com</p>
          <p className="text-sm">+880 1234 567890</p>
          <p className="text-sm">Rupganj, Narayanganj</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="facebook"><FaFacebookF /></a>
            <a href="#" aria-label="twitter"><FaTwitter /></a>
            <a href="#" aria-label="instagram"><FaInstagram /></a>
            <a href="#" aria-label="linkedin"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} SkillSwap. All rights reserved. <a href="/privacy" className="text-blue-400 ml-2">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
