import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <div
      id="hero" // Added id for scrolling reference
      className="relative h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] w-full bg-cover bg-center flex justify-center items-center"
    >
      <img
        src="https://img.freepik.com/free-vector/blue-purple-wave-background-with-white-background_483537-4373.jpg?w=1060&t=st=1725341998~exp=1725342598~hmac=82396a48ed5ecd93765ee1cd0bf6e2d397daf1e75ee23b4015c2dc45dd193974"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center">
        <h1 className="text-4xl font-bold">
          {language === "English"
            ? "Welcome to E-Kalyan"
            : " ई-कल्याण में आपका स्वागत है"}
        </h1>

        <p className="mt-4 text-lg">
          {language === "English"
            ? "Latest Govt Schemes are waiting for you."
            : "नवीनतम सरकारी योजनाएं आपका इंतजार कर रही हैं।"}
        </p>

        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full">
          {language === "English" ? "Get Started" : "शुरू करें"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
