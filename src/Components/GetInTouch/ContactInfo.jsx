import location from "../../assets/Icons/New folder/location.svg";
import phone from "../../assets/Icons/New folder/phone.svg";
import email from "../../assets/Icons/New folder/email.svg";

const ContactInfo = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0696E7] font-Montserrat text-[20px] font-bold flex items-center gap-2">
          <img className="w-5" src={location} alt="" />
          My Location
        </h1>

        <p className="text-white font-Poppins text-[14px]">
          Kamalapur, Ararsha Sadar, Kotwali, Cumilla-3501, Bangladesh.
        </p>

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0696E7] font-Montserrat text-[20px] font-bold flex items-center gap-2">
          <img className="w-5" src={phone} alt="" />
          Contact Number
        </h1>

        <p className="text-white font-Poppins text-[14px]">
          <p>+880 1608249337</p>
          <p>+880 1306591485</p>
        </p>

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#0696E7] font-Montserrat text-[20px] font-bold flex items-center gap-2">
          <img className="w-5" src={email} alt="" />
          Say Hello
        </h1>

        <p className="text-white font-Poppins text-[14px]">
          <p>rahulsd380@gmail.com</p>
          <p>rahulsd836@gmail.com</p>
        </p>

        <div className="w-full h-[1px] bg-gradient-to-br from-blue-500 to-indigo-800"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
