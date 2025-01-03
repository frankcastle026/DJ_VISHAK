import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when a link is clicked
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="sm:fixed sm:top-0 sm:z-50 sm:w-full flex items-center justify-between px-4 bg-gradient-to-r from-gray-300 to-gray-500">
        <img src="./DJ VISHAK BUSINESS CARD.png" alt="Logo" className="xl:h-20 h-12" />

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex space-x-4">
          <a href="#About" className="hover:text-gray-700 uppercase">About</a>
          <a href="#Event" className="hover:text-gray-700 uppercase">Events</a>
          <a href="#Service" className="hover:text-gray-700 uppercase">Service</a>
          <a href="#Contact" className="hover:text-gray-700 uppercase">Contact</a>
        </div>

        {/* Social Media Buttons (Desktop) */}
        <div className="hidden sm:flex space-x-4">
          <a
            href="https://www.instagram.com/itsdjvishak/profilecard/?igsh=MTRhNmU4djZ1Z3Zqcw=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="mailto:djvishakchennai@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden p-2 text-white focus:outline-none"
        >
          <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 z-50 h-full bg-gradient-to-r from-gray-300 to-gray-500 text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden transition-transform duration-300 ease-in-out`}
      >
        {/* Header Section with Close Button */}
        <div className="flex items-center justify-between w-full p-4">
          <h2 className="text-lg font-bold text-black"></h2>
          <button
            onClick={closeSidebar}
            className="p-2 text-white text-3xl"
          >
            <i className="bi bi-x"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center p-6 space-y-6">
          <a href="#About" className="hover:text-gray-700 uppercase" onClick={closeSidebar}>
            About
          </a>
          <a href="#Event" className="hover:text-gray-700 uppercase" onClick={closeSidebar}>
            Events
          </a>
          <a href="#Service" className="hover:text-gray-700 uppercase" onClick={closeSidebar}>
            Service
          </a>
          <a href="#Contact" className="hover:text-gray-700 uppercase" onClick={closeSidebar}>
            Contact
          </a>

          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/itsdjvishak/profilecard/?igsh=MTRhNmU4djZ1Z3Zqcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="mailto:djvishakchennai@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
