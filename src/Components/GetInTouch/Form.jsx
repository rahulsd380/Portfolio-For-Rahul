import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Ripples from 'react-ripples'
import { Toaster, toast } from 'sonner';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ucobnr', 'template_ip8soen', form.current, {
        publicKey: 'S7pp7UJ33cHUaBySS',
      })
      .then(
        () => {
          toast('Message sent to Rahul!', {
            style: {
              padding : "10px",
              borderRadius : '5px'
            },
            duration: 3000,
            className: 'class',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <form ref={form} onSubmit={sendEmail} data-aos="fade-left" data-aos-duration="1000" className="w-full flex flex-col gap-7">
      <div className="flex flex-col md:flex-row items-center gap-[30px] w-full">
        <input
        name='from_name'
          placeholder="Name*"
          type="text"
          className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white"
        />

        <input
        name='from_email'
          placeholder="Email*"
          type="email"
          className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white"
        />
      </div>
      <input
      // name='subject'
        placeholder="Subject*"
        type="text"
        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white"
      />

      <textarea
        name="message"
        placeholder="Message*"
        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white h-[150px]"
      ></textarea>

      <div className="flex justify-center md:justify-end">
      <Ripples during={1500}>
      <button type='submit' className="w-full md:w-[190px] bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex justify-center items-center">
          Send Message
        </button>
      </Ripples>
        
      </div>
      <Toaster
      position="bottom-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'bg-[#074353]',
          title: 'text-white',
        },
      }}
      />
    </form>
  );
};

export default Form;
