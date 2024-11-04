import AchievementCard from "./AchievementCard";
import { useGetAllAchievementQuery } from "../../redux/Features/Achievements/achievementsApi";

const Achievements = () => {
  const {data} = useGetAllAchievementQuery();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-12">
      {data?.data?.map((achievement) => (
        <AchievementCard key={achievement.title} {...achievement} isDeleteBtnNeeded={false} />
      ))}
    </div>
  );
};

export default Achievements;
