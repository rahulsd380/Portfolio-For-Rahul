import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Components/DashboardComponents/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../../Components/DashboardComponents/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="w-full flex flex-col gap-8 px-12">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
