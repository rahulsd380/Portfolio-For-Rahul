import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Components/DashboardComponents/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../../Components/DashboardComponents/DashboardHeader/DashboardHeader";
import { Toaster } from "sonner";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="w-full flex flex-col gap-8 px-12">
        <DashboardHeader />
        <Outlet />
      </div>

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
    </div>
  );
};

export default DashboardLayout;
