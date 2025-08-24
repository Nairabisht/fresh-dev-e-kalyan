import React, { useState } from "react"; // Import useState
import { FaUser, FaLanguage } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Banner = () => {
  const { language, toggleLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false); // Manage dropdown state

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className="bg-blue-600 text-white py-2 position-fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
         
          
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* User Icon */}
            <FaUser 
              className="h-6 w-6 cursor-pointer" 
              onClick={toggleDropdown} 
            />

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <FaLanguage
              className="h-6 w-6 cursor-pointer"
              onClick={toggleLanguage}
            />
            <span>{language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
