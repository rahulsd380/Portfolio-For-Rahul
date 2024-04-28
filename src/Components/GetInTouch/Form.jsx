const Form = () => {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="flex flex-col md:flex-row items-center gap-[30px] w-full">
        <input
          placeholder="Name*"
          type="text"
          className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white"
        />

        <input
          placeholder="Email*"
          type="email"
          className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white"
        />
      </div>
      <input
        placeholder="Subject*"
        type="text"
        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white"
      />

      <textarea
        name=""
        placeholder="Message*"
        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white h-[150px]"
      ></textarea>

      <div className="flex justify-center md:justify-end">
        <button className="w-full md:w-[190px] bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex justify-center items-center transition duration-300 transform hover:-translate-y-0.5">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Form;
