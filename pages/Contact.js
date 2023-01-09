import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  RiMessengerLine,
  RiWhatsappLine,
  RiInstagramLine,
} from "react-icons/ri";

export default function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wtethv8",
        "template_hlets9i",
        form.current,
        "dIUgu8vnY-d_6n4Nw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section>
      <div className=" text-center mt-10">
        <h3 className="text-3xl py-1  dark:text-white">Get in touch</h3>
        <p className="text-md py-5 leading-8 text-gray-80  dark:text-white">
          Please feel free to contact me and let's talk about
          <span className="text-teal-500"> Contact Me </span> and let's talk
          about <span className="text-teal-500"> Your Project</span>
        </p>
        <div className=" text-5xl text-center flex justify-center items-center gap-8 py-3 text-gray-600  dark:text-teal-100">
          <a
            href="https://wa.me/2389729954"
            target="_blank"
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <RiWhatsappLine />
            <span className=" text-sm">+238 972 99 54</span>
          </a>
          <a
            href="https://m.me/WillyGilPires"
            target="_blank"
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <RiMessengerLine />
            <span className=" text-sm">Gil Pires</span>
          </a>
          <a
            href="https://ig.me/m/wgil.pires"
            target="_blank"
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <RiInstagramLine />
            <span className=" text-sm">@wgil.pires</span>
          </a>
        </div>
        <div className=" flex flex-col w-full items-center shadow-sm">
          <form
            id="contactForm"
            action=""
            className="flex flex-col items-center w-full gap-5 text-center shadow-lg p-10 rounded-xl my-5  dark:bg-gray-800 lg:w-1/2"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="block w-full h-10 rounded-md border-2 border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:text-gray-500 focus:ring-gray-500 sm:text-sm"
              type="text"
              name="user_name"
              id=""
              placeholder="Your name"
              required
            />
            <input
              className="block w-full h-10 rounded-md border-2 border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:text-gray-500 focus:ring-gray-500 sm:text-sm"
              type="email"
              name="user_email"
              placeholder="you@email.com"
              required
            />
            <textarea
              className="block w-full rounded-md border-2 border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:text-gray-500 focus:ring-gray-500 sm:text-sm"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required
            />

            <input
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:bg-teal-800 cursor-pointer"
              type="submit"
              value="Send"
            />
            {done && (
              <span className="dark:text-white">
                Thanks for contacting me! I will reply to you soon
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
