import { useState } from "react";
import crossIcon from "../../assets/Icons/New folder/cross.svg";
import FeedbackForm from "./FeedbackForm";

const ShareFeedback = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mx-auto w-fit">
      <button
        onClick={() => setOpenModal(true)}
        className="text-white hover:text-[#0997E6] transition duration-400 group flex flex-col"
      >
        Share Your Feedback
        <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] w-screen ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute max-w-lg w-full bg-[#0E1330] border border-[#282D45] rounded-[20px] p-5 drop-shadow-lg  ${
            openModal
              ? "opacity-1 duration-300"
              : "scale-110 opacity-0 duration-150"
          }`}
        >
            {/* Header */}
          <div className="flex items-center justify-between border-b border-[#282D45] pb-3">
            <p className="text-white font-Poppins text-center">
              Express Your <span className="text-blue-400">Journey With Me</span>
            </p>
            {/* Cross icon */}
            <img
              onClick={() => setOpenModal(false)}
              src={crossIcon}
              alt="cross icon"
              className="size-7"
            />
          </div>

          {/* Body */}
         <FeedbackForm/>
        </div>
      </div>
    </div>
  );
};

export default ShareFeedback;
