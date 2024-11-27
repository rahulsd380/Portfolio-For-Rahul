


const Heading = ({activeTab, setActiveTab, subHeading, heading, tabButtons, translateFirstValue, translateSecondValue}) => {
  // const [activeTab, setActiveTab] = useState(tabButtons[0]);

  return (
    <div>
      <p className="text-white font-Poppins mb-4 text-center">
          {subHeading}
        </p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] mobileLg:text-4xl sm:text-3xl font-bold mb-12 sm:mb-5 text-center">
          {heading}
        </h1>

        {
          tabButtons &&
          <div className="relative w-full max-w-[500px] mx-auto h-20 rounded-full border border-[#0696E7] flex items-center justify-between px-[2px] bg-[#59bdf738]">
          {/* Animated sliding background */}
          <div
            className={`absolute h-[85%] w-[50%] bg-[#0696E7] rounded-full transition-transform duration-500 ease-in-out ${
              activeTab === tabButtons[0] ? translateFirstValue : translateSecondValue
            }`}
          ></div>

          {tabButtons.map((button) => (
            <div
              key={button}
              onClick={() => setActiveTab(button)}
              className="relative cursor-pointer flex-1 h-full flex justify-center items-center text-white font-Poppins text-xs md:text-xl font-medium transition-colors duration-300"
            >
              {button}
            </div>
          ))}
        </div>
        }
    </div>
  );
};

export default Heading;