import Ripples from "react-ripples";
import rightArrow from "../../assets/Icons/New folder/right-arrow (2).svg";
import cross from "../../assets/Icons/New folder/cross.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Verify = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [pin, setPin] = useState("");

  const handleNumberClick = (number) => {
    if (pin.length < 5) {
      setPin(pin + number);
      setValue("pin", pin + number);
    }
  };

  const onSubmit = (data) => {
    console.log("Submitted PIN:", data.pin);
  };

  const resetPin = () => {
    setPin("");
    setValue("pin", "");
  };

  const watchPin = watch("pin", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto flex justify-center items-center mt-16">
      <div className="h-[440px] w-[330px] bg-[#0E1330] border border-[#282D45] rounded-3xl p-4">
        <p className="text-white font-Poppins text-sm leading-[30px] capitalize">
          Verify that you are <span className="text-blue-500">Rahul</span>
        </p>

        <input
          {...register("pin", { required: true })}
          value={watchPin}
          type="text"
          placeholder="Enter 5 digit PIN"
          className="bg-[#0E1330] focus:outline-none focus:border-blue-600 border-b border-gray-700 transition duration-300 text-[#ACACAC] w-full pb-2 mt-10 text-center tracking-wider"
          readOnly
        />



        {/* Number buttons */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <Ripples key={number} during={1500}>
              <button
                type="button"
                onClick={() => handleNumberClick(number.toString())}
                className="bg-[#1C2242] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg text-white text-lg"
              >
                {number}
              </button>
            </Ripples>
          ))}

          {/* 0 button */}
          <Ripples during={1500}>
            <button
              type="button"
              onClick={() => handleNumberClick("0")}
              className="bg-[#1C2242] border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg text-white text-lg"
            >
              0
            </button>
          </Ripples>

          {/* Reset Button */}
          <Ripples during={1500}>
            <button
              onClick={resetPin}
              type="submit"
              className="bg-gradient-to-br from-blue-500 to-indigo-800 border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg"
            >
              <img className="size-8" src={cross} alt="Submit" />
            </button>
          </Ripples>


          {/* Submit button */}
          <Ripples during={1500}>
            <button
              type="submit"
              className="bg-gradient-to-br from-blue-500 to-indigo-800 border border-[#282D45] w-14 h-14 flex justify-center items-center rounded-lg"
            >
              <img className="size-4" src={rightArrow} alt="Submit" />
            </button>
          </Ripples>


        </div>
      </div>
    </form>
  );
};

export default Verify;
