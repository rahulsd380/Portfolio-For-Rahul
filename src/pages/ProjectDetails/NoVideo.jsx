import Lottie from "lottie-react";
import noVideoAnimation from "../../assets/Animation - 1730536389801.json"

const NoVideo = () => {
    return (
        <div className="max-w-[500px] w-full mx-auto">
            <Lottie animationData={noVideoAnimation} loop={true} />
            <h1 className="text-rose-500 text-xl font-medium font-Poppins text-center">No Video Added</h1>
        </div>
    );
};

export default NoVideo;