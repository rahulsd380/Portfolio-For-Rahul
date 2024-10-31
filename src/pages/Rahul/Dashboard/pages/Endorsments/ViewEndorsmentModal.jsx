import PropTypes from 'prop-types';
import img from "../../../../../assets/Icons/New folder/58.png";
import stars from "../../../../../assets/Icons/New folder/stars.svg";

const ViewEndorsmentModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className={`fixed z-[100] flex items-center justify-center ${
        isModalOpen ? "opacity-1 visible" : "invisible opacity-0"
      } inset-0 h-full w-full mx-auto backdrop-blur-sm duration-100 `}
    >
      <div
        onClick={(e_) => e_.stopPropagation()}
        style={{ overflowY: "auto", scrollbarWidth: "thin" }}
        className={`absolute w-[600px] h-auto  text-white drop-shadow-2xl ${
          isModalOpen
            ? "opacity-1 translate-y-0 duration-300"
            : "-translate-y-20 opacity-0 duration-150"
        }`}
      >
        <div className="mt-10 bg-[#0E1330] border border-[#282D45] rounded-[20px] p-5">
          <div className="flex items-center gap-5">
            <img src={img} alt="Profile" />
            <div>
              <h1 className="text-white text-opacity-90 font-Lato text-2xl font-semibold">
                Rahul SD
              </h1>
              <p className="text-white text-opacity-50 font-Poppins mt-2">
                Web Developer
              </p>
            </div>
          </div>

          <p className="text-white font-Poppins text-[12px] md:text-[14px] font-normal mt-6">
            khsgag asdhfgdf sidfgsd isdfgs isdufysd fisudfs dfiusdfisdufyhsdf
            iuyhsdf sdifuysd f{" "}
          </p>

          <div className="flex justify-between items-center mt-4">
            <img src={stars} alt="Rating" />
            <p className="text-white text-opacity-50 font-Montserrat text-base font-normal">
              Friday, January 21
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewEndorsmentModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default ViewEndorsmentModal;
