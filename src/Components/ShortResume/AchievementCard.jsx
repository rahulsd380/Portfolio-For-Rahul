import PropTypes from "prop-types";

const AchievementCard = ({ img, title, completedAt }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="h-[585px] bg-[#0E1330] border border-[#282D45] rounded-3xl p-4"
    >
      <img src={img} alt={title} className="w-full h-[389px]" />
      <h1 className="text-white font-Poppins text-xl font-medium leading-[30px] capitalize mt-5">
        {title}
      </h1>
      <h1 className="text-white font-Poppins text-sm leading-[30px] capitalize mt-[10px]">
        {completedAt}
      </h1>
    </div>
  );
};

AchievementCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completedAt: PropTypes.string.isRequired,
};

export default AchievementCard;
