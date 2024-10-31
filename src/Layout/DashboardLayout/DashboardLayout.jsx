import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Components/DashboardComponents/DashboardSidebar/DashboardSidebar";


const DashboardLayout = () => {
    return (
        <div className="flex gap-12">
            <DashboardSidebar/>
            <div className="w-full">
            <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;