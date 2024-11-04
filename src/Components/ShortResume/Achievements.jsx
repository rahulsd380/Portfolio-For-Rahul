import AchievementCard from "./AchievementCard";
import img1 from "../../assets/Images/Project Cover (1).png";

const Achievements = () => {
  const achievements = [
    {
      image: img1,
      name: "Complete Web Development Course With Jhankar Mahbub",
      completedAt: "Progamming Hero - ( 29/12/2022 - Running )",
    },
    {
      image: img1,
      name: "Complete Web Development Course With Jhankar Mahbub",
      completedAt: "Progamming Hero - ( 29/12/2022 - Running )",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-12">
      {achievements.map((achievement) => (
        <AchievementCard key={achievement.title} {...achievement} isDeleteBtnNeeded={false} />
      ))}
    </div>
  );
};

export default Achievements;
