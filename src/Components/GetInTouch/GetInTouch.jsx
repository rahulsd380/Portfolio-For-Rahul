import Heading from "../Reusable/Heading";
import ContactInfo from "./ContactInfo";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <div id="contact-me" className="max-w-6xl mx-auto mt-[80px] px-3 xl:px-0">
      <div>
        <Heading
          subHeading={"Contact"}
          heading={"Get In Touch"}
        />
        <div className="flex flex-col md:flex-row gap-16 mt-10">
          <ContactInfo />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
