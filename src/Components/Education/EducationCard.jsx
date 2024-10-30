import PropTypes from "prop-types";
import upArrrow from "../../assets/Icons/New folder/up-arrow-blue.svg";
import line from "../../assets/Icons/New folder/staright-line.svg";

const EducationCard = ({ title, place, year }) => {
  return (
    <div className="relative p-5 rounded-xl group overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"></div>

      <div className="relative z-10">
        <h1 className="text-white font-Poppins text-xl font-semibold leading-5 capitalize group-hover:text-white">
          {title}
        </h1>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#ACACAC] font-Poppins text-sm font-medium leading-5 capitalize mt-5 group-hover:text-white">
            {place}
          </p>
          <div className="flex flex-col items-end">
            <img src={upArrrow} alt="up arrow icon" className="size-5" />
            <p className="text-[#ACACAC] font-Poppins text-lg font-medium leading-5 capitalize group-hover:text-white">
              <span className="text-3xl text-[#0696E7]">.</span> {year}
            </p>
          </div>
        </div>

        <img src={line} alt="line" className="mt-[18px]" />
      </div>
    </div>
  );
};

// Prop validation with PropTypes
EducationCard.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default EducationCard;
