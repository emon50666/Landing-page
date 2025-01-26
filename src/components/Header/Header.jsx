// components/Header.js
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import brand from "../../assets/images/brand.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" text-white  z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="">
            <img src={brand} alt="" className="w-24 h-10" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex text-base space-x-7 lg:ml-7">
            <a href="#demos" className="hover:text-gray-400">Demos</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#blog" className="hover:text-gray-400">Blog</a>
            <a href="#pages" className="hover:text-gray-400">Pages</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="py-2 px-4 cursor-pointer bg-transparent border border-gray-500 rounded-lg hover:bg-gray-800">
            Sign in
          </button>
          <button
            className="py-2 px-4 cursor-pointer rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white hover:opacity-90"
          >
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoCloseOutline size={24} /> : <CiMenuFries size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-[#221837] text-white shadow-lg transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 p-6">
          <a href="#demos" className="hover:text-gray-400">Demos</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#blog" className="hover:text-gray-400">Blog</a>
          <a href="#pages" className="hover:text-gray-400">Pages</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
