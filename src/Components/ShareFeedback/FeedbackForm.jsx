import { useState } from "react";
import { useForm } from "react-hook-form";
import Ripples from "react-ripples";
import { Toaster } from "sonner";
import photo from "../../assets/Icons/New folder/photo.svg";
import star from "../../assets/Icons/New folder/star.svg";
import starDark from "../../assets/Icons/New folder/star-dark.svg";

const FeedbackForm = () => {
  const [rating, setRating] = useState(4);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleStarClick = (value) => {
    setRating(value);
  };

  const onSubmit = (data) => {
    const postedAt = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    const formData = { ...data, rating, postedAt };
    console.log(formData);
  };

  return (
    <form className="w-full flex flex-col gap-7 mt-7" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center gap-3">
        {[1, 2, 3, 4, 5].map((starValue) => (
          <img
            key={starValue}
            src={starValue <= rating ? star : starDark}
            alt="star"
            className="size-6 cursor-pointer"
            onClick={() => handleStarClick(starValue)}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-[30px] w-full">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name*"
          type="text"
          className={`outline-none bg-[#0E1330] border ${
            errors.name ? "border-red-500" : "border-[#282D45]"
          } rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300`}
        />

        <input
          {...register("occupation", { required: "Occupation is required" })}
          placeholder="Your Occupation*"
          type="text"
          className={`outline-none bg-[#0E1330] border ${
            errors.occupation ? "border-red-500" : "border-[#282D45]"
          } rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300`}
        />
      </div>

      <textarea
        {...register("message", { required: "Feedback is required" })}
        placeholder="Your Feedback*"
        className={`outline-none bg-[#0E1330] border ${
          errors.message ? "border-red-500" : "border-[#282D45]"
        } rounded-[10px] py-3 px-5 w-full text-white h-[150px] focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300`}
      ></textarea>

<div className="flex items-center justify-between">
      <div className="cursor-pointer">
        <label htmlFor="image" className="flex flex-col gap-1 cursor-pointer">
          <div className="flex items-center gap-3 text-white">
            <img src={photo} width={25} height={25} alt="photo-icon" />
            Upload Image
          </div>
          <p className="text-xs text-[#ACACAC]">Please upload your profile picture</p>
        </label>
        <input
          {...register("image")}
          type="file"
          id="image"
          className="hidden"
        />
      </div>

      <Ripples during={1500}>
          <button
            type="submit"
            className="w-full md:w-[190px] bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex justify-center items-center"
          >
            Submit
          </button>
        </Ripples>
        </div>

      {/* <div className="flex justify-center md:justify-end">
        <Ripples during={1500}>
          <button
            type="submit"
            className="w-full md:w-[190px] bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex justify-center items-center"
          >
            Submit
          </button>
        </Ripples>
      </div> */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "bg-[#074353]",
            title: "text-white",
          },
        }}
      />
    </form>
  );
};

export default FeedbackForm;
