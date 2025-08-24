import React from "react";
import { useLanguage } from "../../context/LanguageContext";
const Marquee = () => {
  const { language } = useLanguage();
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-gray-100 py-4">
      <div className="animate-marquee inline-block text-lg font-semibold text-gray-800">
        <span className="mx-8">
          {language === "English"
            ? "Welcome to Ekalyan"
            : " ई-कल्याण में आपका स्वागत है"}
        </span>
        <span className="mx-8">
          {language === "English"
            ? "Your success, our commitment"
            : "आपकी सफलता, हमारी प्रतिबद्धता"}
        </span>
        <span className="mx-8">
          {language === "English"
            ? "Join us to achieve great things"
            : "महान चीजें हासिल करने के लिए हमसे जुड़ें"}
        </span>
        <span className="mx-8">
          {language === "English"
            ? "Innovating for a better tomorrow"
            : "बेहतर कल के लिए नवाचार"}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
