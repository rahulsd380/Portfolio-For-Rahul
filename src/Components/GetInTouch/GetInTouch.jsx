import ContactInfo from "./ContactInfo";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <div className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <p className="text-white font-Poppins mb-5 text-center">Contact</p>

        <h1 className="text-[#0696E7] font-Montserrat text-5xl md:text-[40px] font-bold mb-12 text-center">
          Get In Touch{" "}
        </h1>

        <div className="flex flex-col md:flex-row gap-16">
          <ContactInfo />

          {/* Form */}

          <Form />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
