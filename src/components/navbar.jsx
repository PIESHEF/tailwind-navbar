import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="bg-white shadow-lg">
        <div class="mx-auto max-w-6xl px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                {/* <!-- Website Logo --> */}
                <a href="/" class="flex items-center py-4 px-2">
                  <span class="text-lg font-semibold text-gray-500">Application Title</span>
                </a>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div class="hidden items-center space-x-1 md:flex">
                <a href="/" class="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500">Home</a>
                <a href="/" class="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500">Services</a>
                <a href="/" class="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500">About</a>
                <a href="/" class="py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-500">Contact Us</a>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div class="hidden items-center space-x-3 md:flex">
              <a href="/" class="rounded py-2 px-2 font-medium text-gray-500 transition duration-300 hover:bg-green-500 hover:text-white">Log In</a>
              <a href="/" class="rounded bg-green-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-green-400">Sign Up</a>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div class="flex items-center md:hidden">
              <button class="mobile-menu-button outline-none">
                <svg class="h-6 w-6 text-gray-500 hover:text-green-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div class="mobile-menu hidden">
          <ul class="">
            <li class="active"><a href="index.html" class="block bg-green-500 px-2 py-4 text-sm font-semibold text-white">Home</a></li>
            <li><a href="#services" class="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">Services</a></li>
            <li><a href="#about" class="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">About</a></li>
            <li><a href="#contact" class="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">Contact Us</a></li>
          </ul>
        </div>
        {/* <script>
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
        	menu.classList.toggle("hidden");
        });
      </script> */}
      </nav>
    );
  }
}

export default NavBar; 
