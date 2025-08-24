import React from "react";
import { useLanguage } from "../../context/LanguageContext";
const Dbanner = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="bg-blue-600 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
          <span className="font-bold items-center">
            {language === "English" ? "Designed & developed by DIT" : "DIT द्वारा डिजाइन और विकसित"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dbanner;
