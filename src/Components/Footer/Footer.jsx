import { footerInfo, socialLinks } from "./footer.constants";
// import upArrow from "../../assets/Icons/New folder/up-arrow.svg";
// import  Ripples  from 'react-ripples';

const Footer = () => {
  // const handleScroll = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }
  return (
    <div className="mt-[80px] bg-[#0E1330] border-t-2 border-[#282D45] overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 xl:px-0 flex flex-col gap-9 py-10">
        {/* All footer info */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
          {footerInfo.map((info, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h1
                className={`${info.textColor ? info.textColor : "text-white"
                  } font-Poppins text-[20px] font-bold`}
              >
                {info.title}
              </h1>

              {
                info.href ?
                  <a href={info.href ? info.href : ""} className="text-[#a5a5a5] hover:underline font-Poppins text-[14px]">
                    {info.subtitle}
                  </a>
                  :
                  <p className="text-[#a5a5a5] font-Poppins text-[14px]">
                    {info.subtitle}
                  </p>
              }
            </div>
          ))}
        </div>

        {/* <Ripples className="" during={1500}>
                <button onClick={handleScroll} className="bg-[#0696E7] border border-[#282D45] w-7 h-7 flex justify-center items-center rounded-full animate-pulse ">
                        <img className="w-3" src={upArrow} alt="" />
                    </button>
                </Ripples> */}
        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
          <p className="text-[#a5a5a5] font-Poppins text-[14px]">
            2024 @All Project Rahul Sutradhar
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link, index) => (
              link.href ? (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  <img
                    className={`${link.width} cursor-pointer transition duration-300 transform hover:-translate-y-0.5`}
                    src={link.src}
                    alt={link.alt}
                  />
                </a>
              ) : (
                <img
                  key={index}
                  className={`${link.width} cursor-pointer transition duration-300 transform hover:-translate-y-0.5`}
                  src={link.src}
                  alt={link.alt}
                />
              )
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
