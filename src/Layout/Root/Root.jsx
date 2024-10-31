import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Toaster } from "sonner";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
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

export default Root;