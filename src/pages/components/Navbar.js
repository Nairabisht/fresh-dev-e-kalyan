import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const handleClick = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };

  // Function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-3 position-fixed">
        <Link legacyBehavior href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <img
              src="/image/HP-Govt-Logo.png"
              alt="Logo"
              className="h-6 w-10 mr-2"
            />
            <span className="text-xl text-blue-900 font-bold tracking-wide">
              {language === "English" ? "e-kalyan" : "ई-कल्याण"}
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-slate-600 ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            navbar ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            {/* Home link */}
            <button
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-600 font-bold items-center justify-center hover:bg-blue-500 hover:text-white"
              onClick={() => handleScroll("hero")}
            >
              {language === "English" ? "Home" : "मुख्य पृष्ठ"}
            </button>

            {/* About link */}
            <button
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-600 font-bold items-center justify-center hover:bg-blue-500 hover:text-white"
              onClick={() => handleScroll("about-section")}
            >
              {language === "English" ? "About" : "हमारे बारे में"}
            </button>

            {/* Features link */}
            <button
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-600 font-bold items-center justify-center hover:bg-blue-500 hover:text-white"
              onClick={() => handleScroll("features")}
            >
              {language === "English" ? "Features" : "सुविधाऐं"}
            </button>

            {/* Contact link */}
            <button
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-600 font-bold items-center justify-center hover:bg-blue-500 hover:text-white"
              onClick={() => handleScroll("contact")}
            >
              {language === "English" ? "FAQ's" : "FAQ's"}
            </button>
            <Link legacyBehavior href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-600 font-bold items-center justify-center hover:bg-blue-500 hover:text-white">
                {language === "English" ? "Sign in" : "साइन इन करें"}
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-600 font-bold items-center justify-center hover:bg-blue-500 hover:text-white">
                {language === "English" ? "Sign up" : "साइन अप करें"}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

  
