import { Link } from "react-router-dom";

function NavScroll() {
  return (
    <nav class="flex justify-center items-center mx-4 max-md:w-full max-md:justify-between px-6 py-4 rounded-full text-white text-sm ">
      <Link to='/'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </Link>
      <div class="hidden md:flex items-center gap-6 ml-7">
        <Link to='/' class="relative overflow-hidden h-6 group">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
          <span
            class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Home</span>
        </Link>
        <Link to='/products' class="relative overflow-hidden h-6 group">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
          <span
            class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Products</span>
        </Link>
        <Link to='/about' class="relative overflow-hidden h-6 group">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">About us</span>
          <span
            class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">About us</span>
        </Link>
      </div>

      <div class="hidden ml-14 md:flex items-center gap-4">
        <Link to='/contact' 
          class="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </Link>
        <Link to='/visit'
          class="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Book a visit
        </Link>
      </div>
      <button id="menuToggle" class="md:hidden text-gray-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div id="mobileMenu" class="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4">
        <a class="hover:text-indigo-600" href="#">
          Products
        </a>
        <a class="hover:text-indigo-600" href="#">
          Customer Stories
        </a>
        <a class="hover:text-indigo-600" href="#">
          Pricing
        </a>
        <a class="hover:text-indigo-600" href="#">
          Docs
        </a>
        <button
          class="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button
          class="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default NavScroll;