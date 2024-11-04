import { useState } from "react";
import { useForm } from "react-hook-form";
import Ripples from "react-ripples";
import photo from "../../assets/Icons/New folder/photo.svg";
import star from "../../assets/Icons/New folder/star.svg";
import starDark from "../../assets/Icons/New folder/star-dark.svg";
import { useMakeEndorsementMutation } from "../../redux/Features/Endorsements/endorsementsApi";
import { toast } from "sonner";
import cross from "../../assets/Icons/New folder/cross.svg";

const FeedbackForm = ({setOpenModal}) => {
  const [makeEndorsement] = useMakeEndorsementMutation();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [rating, setRating] = useState(4);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleStarClick = (value) => {
    setRating(value);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    // const postedAt = new Date().toLocaleDateString('en-US', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    // });
    
    const endorsementData = {
      name: data.name,
      occupation: data.occupation,
      feedback: data.feedback,
      rating: rating,
    }
    formData.append("data", JSON.stringify(endorsementData));
    formData.append("file", uploadedImage);

    toast.promise(
      makeEndorsement(formData).unwrap(),
      {
        loading: 'Loading...',
        success: (response) => {
          reset();
          setOpenModal(false);
          setUploadedImage(null);
          return response?.message || 'Thanks a bunch for your application!';
        },
        error: (err) => {
          console.error('Error:', err);
          return 'Failed to endorse...';
        },
      }
    );
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(() => [reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setUploadedImage(null);
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
          className={`outline-none bg-[#0E1330] border ${errors.name ? "border-red-500" : "border-[#282D45]"
            } rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300`}
        />

        <input
          {...register("occupation", { required: "Occupation is required" })}
          placeholder="Your Occupation*"
          type="text"
          className={`outline-none bg-[#0E1330] border ${errors.occupation ? "border-red-500" : "border-[#282D45]"
            } rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300`}
        />
      </div>

      <textarea
        {...register("feedback", { required: "Feedback is required" })}
        placeholder="Your Feedback*"
        className={`outline-none bg-[#0E1330] border ${errors.feedback ? "border-red-500" : "border-[#282D45]"
          } rounded-[10px] py-3 px-5 w-full text-white h-[150px] focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300`}
      ></textarea>

<div className="flex items-center justify-between">
            {/* Image upload and preview */}
            {uploadedImage ? (
              <div className="relative size-20">
                <img
                  src={imagePreview}
                  alt="Service Icon"
                  className="w-full h-full rounded-lg object-cover"
                />
                <button
                  onClick={handleImageRemove}
                  type="button"
                  className="absolute top-1 right-1 bg-red-600 p-1 rounded-full"
                >
                  <img src={cross} alt="Remove Icon" className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="cursor-pointer">
                <label
                  htmlFor="image"
                  className="flex flex-col gap-1 cursor-pointer"
                >
                  <div className="flex items-center gap-3 text-white">
                    <img src={photo} width={25} height={25} alt="photo-icon" />
                    Upload Service Icon
                  </div>
                  <p className="text-xs text-[#ACACAC]">
                    Please upload Service Icon
                  </p>
                </label>
                <input
                  {...register("image")}
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            )}

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
    </form>
  );
};

export default FeedbackForm;
