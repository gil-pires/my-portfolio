import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import myPicture from "../public/myPicture.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className=" text-center p-10">
        <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          <span className=" text-gray-600  dark:text-white">Hi, I'am</span>{" "}
          Willian Pires <br />
          <span className=" text-gray-600  dark:text-white">
            but you can call me
          </span>{" "}
          Gil
        </h2>
        <h3 className=" text-2xl py-2  dark:text-white md:text-3xl">
          Developer and UI/UX Designer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto  dark:text-white md:text-xl">
          Passionated for create solutions using programming languages and
          always looking to learn more and to work on ambitious projects with
          positive people.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
        >
          View Resume
        </a>
      </div>
      <div className=" text-5xl flex justify-center gap-8 py-3 text-gray-600  dark:text-teal-100">
        <a
          href="https://www.linkedin.com/in/willian-pires-56111413b/"
          target="_blank"
          className=" cursor-pointer"
        >
          <AiFillLinkedin />
        </a>
        <a href="#contactForm" className=" cursor-pointer">
          <MdEmail />
        </a>
        <a
          href="https://github.com/gil-pires"
          target="_blank"
          className=" cursor-pointer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/wgil.pires/"
          target="_blank"
          className=" cursor-pointer"
        >
          <AiFillInstagram />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={myPicture} fill objectFit="contain" />
      </div>
    </section>
  );
}
