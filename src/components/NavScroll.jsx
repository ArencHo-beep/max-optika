import { useState } from "react";
import { Link } from "react-router-dom";

function NavScroll() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative flex justify-center items-center mx-4 max-md:w-full max-md:justify-between px-6 py-4 rounded-full text-white text-sm">
      <Link to="/">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        <Link to="/" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Home</span>
        </Link>
        <Link to="/products" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Products</span>
        </Link>
        <Link to="/about" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">About us</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">About us</span>
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden ml-14 md:flex items-center gap-4">
        <Link
          to="/contact"
          className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
        >
          Contact
        </Link>
        <Link
          to="/visit"
          className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
        >
          Book a visit
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMobileMenu} className="md:hidden text-gray-300 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 bg-black w-full flex flex-col items-center gap-4 py-6 z-40">
          <Link to="/products" className="hover:text-indigo-400" onClick={toggleMobileMenu}>
            Products
          </Link>
          <Link to="/about" className="hover:text-indigo-400" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link to="/pricing" className="hover:text-indigo-400" onClick={toggleMobileMenu}>
            Pricing
          </Link>
          <Link to="/docs" className="hover:text-indigo-400" onClick={toggleMobileMenu}>
            Docs
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Contact
          </Link>
          <Link
            to="/visit"
            onClick={toggleMobileMenu}
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavScroll;
