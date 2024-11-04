import { useGetAllServicesQuery } from "../../redux/Features/MyServices/myServicesApi";

const MyServices = () => {
  const {data} = useGetAllServicesQuery();
  return (
    <div id="services" className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <p className="text-white font-Poppins mb-5 text-center">
          Awesome Services
        </p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          My Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-[90px]">
          {data?.data?.map((info, index) => (
            <div
            data-aos="fade-up" 
                    data-aos-duration="2000"
              key={index}
              className="bg-[#0E1330] border border-[#282D45] w-full mobileLg:w-[365px] h-[225px] rounded-[20px] flex flex-col gap-[18px] justify-center items-center relative mb-16 px-3"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins w-[66px] h-[66px] rounded sm:rounded-[10px] flex justify-center items-center absolute -top-8">
                <img src={info?.icon} alt="" />
              </div>

              <h1 className="text-white font-Poppins text-2xl font-semibold text-center">
                {info?.name}
              </h1>
              <p className="text-[#939393] font-Poppins text-[12px] md:text-[14px] font-normal text-center">
                {info?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
