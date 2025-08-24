import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../../context/LanguageContext';

const Features = () => {
  const { language } = useLanguage();

  const features = [
    {
      id: 1,
      icon: 'fa-solid fa-hands-helping',
      title: language === 'English' ? 'SC & OBC Welfare' : 'अनुसूचित जाति और अन्य पिछड़ा वर्ग कल्याण',
      description: language === 'English'
        ? 'Himachal Pradesh offers scholarships, skill development programs, and financial aid to SC and OBC communities for their socio-economic upliftment.'
        : 'हिमाचल प्रदेश अनुसूचित जाति और अन्य पिछड़ा वर्ग के समुदायों को उनके सामाजिक-आर्थिक उत्थान के लिए छात्रवृत्ति, कौशल विकास कार्यक्रम और वित्तीय सहायता प्रदान करता है।',
      color: 'blue',
    },
    {
      id: 2,
      icon: 'fa-solid fa-hand-holding-heart',
      title: language === 'English' ? 'Minority Empowerment' : 'अल्पसंख्यक सशक्तिकरण',
      description: language === 'English'
        ? 'Special schemes are available for minority communities, focusing on education, employment, and entrepreneurship support.'
        : 'अल्पसंख्यक समुदायों के लिए विशेष योजनाएँ उपलब्ध हैं, जो शिक्षा, रोजगार और उद्यमिता समर्थन पर केंद्रित हैं।',
      color: 'green',
    },
    {
      id: 3,
      icon: 'fa-solid fa-wheelchair',
      title: language === 'English' ? 'Specially Abled Welfare' : 'विकलांग कल्याण',
      description: language === 'English'
        ? 'The state offers a range of facilities for the specially abled, including free education, employment reservations, and financial assistance.'
        : 'राज्य विकलांग व्यक्तियों के लिए मुफ्त शिक्षा, रोजगार आरक्षण और वित्तीय सहायता सहित कई सुविधाएँ प्रदान करता है।',
      color: 'red',
    },
    {
      id: 4,
      icon: 'fa-solid fa-chalkboard-teacher',
      title: language === 'English' ? 'Educational Assistance' : 'शैक्षिक सहायता',
      description: language === 'English'
        ? 'The government provides free education, scholarships, and hostel facilities for students from SC, OBC, minority, and specially abled groups.'
        : 'सरकार अनुसूचित जाति, अन्य पिछड़ा वर्ग, अल्पसंख्यक और विकलांग समूहों के छात्रों के लिए मुफ्त शिक्षा, छात्रवृत्तियाँ और छात्रावास सुविधाएँ प्रदान करती है।',
      color: 'purple',
    },
    {
      id: 5,
      icon: 'fa-solid fa-briefcase',
      title: language === 'English' ? 'Employment Opportunities' : 'रोजगार के अवसर',
      description: language === 'English'
        ? 'Various state schemes provide financial aid, training, and job placements to empower SCs, OBCs, minorities, and specially abled individuals.'
        : 'विभिन्न राज्य योजनाएँ अनुसूचित जाति, अन्य पिछड़ा वर्ग, अल्पसंख्यक और विकलांग व्यक्तियों को सशक्त बनाने के लिए वित्तीय सहायता, प्रशिक्षण और नौकरी दिलाने की सुविधा प्रदान करती हैं।',
      color: 'orange',
    },
    {
      id: 6,
      icon: 'fa-solid fa-shield-alt',
      title: language === 'English' ? 'Social Security Schemes' : 'सामाजिक सुरक्षा योजनाएं',
      description: language === 'English'
        ? 'The state offers social security and pension schemes aimed at providing financial security for underprivileged sections of society.'
        : 'राज्य समाज के वंचित वर्गों के लिए वित्तीय सुरक्षा प्रदान करने के उद्देश्य से सामाजिक सुरक्षा और पेंशन योजनाएं प्रदान करता है।',
      color: 'teal',
    },
  ];

  return (
    <section
      id="features" // Added id for scrolling reference
      className="shopify-section multicolumn gradient background-none mx-auto px-6 lg:px-16 mb-12"
    >
      <div className="page-width padding isolate animate-slide-in" style={{ animationOrder: 0 }}>
        <div className="title-wrapper no-top-margin mb-6">
          <h2 className="text-black text-center text-3xl font-bold mb-5">
            {language === 'English' ? 'Empowerment Features' : 'सशक्तिकरण विशेषताएँ'}
          </h2>
        </div>
        <div className="slider-component mobile-gutter">
          {/* Responsive grid: 1 column on small screens, 3 columns on medium, and 3 on large */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <li key={feature.id} className="multicolumn-list_item center animate-slide-in" style={{ animationOrder: feature.id }}>
                <div className="multicolumn-card text-center">
                  <div className="fa_icons mb-4">
                    <i className={feature.icon} style={{ color: feature.color, fontSize: '30px' }}></i>
                  </div>
                  <div className="multicolumn-card__info">
                    <h3 className="text-black text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-black">{feature.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
