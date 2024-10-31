import { useState } from "react";

const Heading = ({ subtitle, title, tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabClick) onTabClick(tabId);
  };

//   const getTranslateX = (tabId) => {
//     const index = tabs.findIndex((tab) => tab.id === tabId);
//     return `translate-x-[${index * 100}%]`;
//   };

const getTranslateX = (activeTab) => {
    const index = tabs.findIndex((tab) => tab.id === activeTab);
    if (index === -1) return "translate-x-0"; // Default if activeTab is not found
    
    // Assuming each tab is approximately 60px wide (adjust based on actual width)
    return `translate-x-[${index * 60}px]`;
  };
  

  return (
    <div className="text-center max-w-6xl mx-auto">
      <p className="text-white font-Poppins mb-5">{subtitle}</p>

      <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12">
        {title}
      </h1>

      <div className="relative w-full md:w-[500px] mx-auto h-20 rounded-full border border-[#0696E7] flex items-center justify-between px-[2px] bg-[#59bdf738]">
        {/* Animated sliding background */}
        <div
          className={`absolute h-[85%] w-[${100 / tabs.length}%] bg-[#0696E7] rounded-full transition-transform duration-500 ease-in-out ${getTranslateX(
            activeTab
          )}`}
        ></div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative cursor-pointer flex-1 h-full flex justify-center items-center text-white font-Poppins text-xs md:text-xl font-medium transition-colors duration-300 ${
              activeTab === tab.id ? "font-semibold" : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
