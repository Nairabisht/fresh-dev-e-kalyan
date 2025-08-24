
import Image from "next/image";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Knowmore() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-white text-lg">
          {language === "English" ? "Our Work Flow" : "हमारा कार्य प्रवाह"}
        </h2>
        <h3 className="text-4xl font-bold">
          {language === "English" ? "4 Steps Verification" : "4 चरण सत्यापन"}
        </h3>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="bg-blue-500 p-6 rounded-lg text-center">
          <Image
            src="/image/user-interface.webp"
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h4 className="text-xl font-bold mt-4">
            {language === "English" ? "Visit the site" : "साइट पर जाएँ"}
          </h4>
          <p className="mt-2 text-white">
            {language === "English"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis and the partes."
              : "लोरेम इप्सम डोलर सिट अमेट, कंसेक्टेचर एडिपिसिंग एलीट। एटियम ईयू टरपिस और पार्टेस।"}
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-blue-500 p-6 rounded-lg text-center">
          <Image
            src="/image/user-interface.webp"
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h4 className="text-xl font-bold mt-4">
            {language === "English" ? "Visit the site" : "साइट पर जाएँ"}
          </h4>
          <p className="mt-2 text-white">
            {language === "English"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis and the partes."
              : "लोरेम इप्सम डोलर सिट अमेट, कंसेक्टेचर एडिपिसिंग एलीट। एटियम ईयू टरपिस और पार्टेस।"}
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-blue-500 p-6 rounded-lg text-center">
          <Image
            src="/image/user-interface.webp"
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h4 className="text-xl font-bold mt-4">
            {language === "English" ? "Visit the site" : "साइट पर जाएँ"}
          </h4>
          <p className="mt-2 text-white">
            {language === "English"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis and the partes."
              : "लोरेम इप्सम डोलर सिट अमेट, कंसेक्टेचर एडिपिसिंग एलीट। एटियम ईयू टरपिस और पार्टेस।"}
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-blue-500 p-6 rounded-lg text-center">
          <Image
            src="/image/user-interface.webp"
            alt=""
            width={100}
            height={100}
            className="mx-auto"
          />
          <h4 className="text-xl font-bold mt-4">
            {language === "English" ? "Visit the site" : "साइट पर जाएँ"}
          </h4>
          <p className="mt-2 text-white">
            {language === "English"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis and the partes. l"
              : "लोरेम इप्सम डोलर सिट अमेट, कंसेक्टेचर एडिपिसिंग एलीट। एटियम ईयू टरपिस और पार्टेस।"}
          </p>
        </div>
      </div>
    </div>
  );
}
