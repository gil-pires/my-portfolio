import { BsImageFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
export default function () {
  return (
    <section>
      <div className=" text-center p-10">
        <h3 className=" text-3xl my-10  dark:text-white">What I can do</h3>
        <p className="text-md py-2 leading-8 text-gray-80 max-w-2xl mx-auto  dark:text-white">
          With +2 year of experience in
          <span className="text-teal-500"> Software Development </span> and
          creating <span className="text-teal-500">UI/UX Designs</span>, i've
          been working in many projects by creating{" "}
          <span className="text-teal-500">Web</span> and{" "}
          <span className="text-teal-500">Mobile Applications</span> using the
          most recent technologies
        </p>
      </div>
      {/**CARDS */}
      <div className="lg:flex gap-10">
        {/**design */}
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800">
          <BsImageFill className=" text-8xl text-gray-500 " />
          <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
            Beautiful Designs
          </h3>
          <p className="py-2  dark:text-white">
            Creating elegant designs suited to your need as following core
            design theory.
          </p>
          <h4 className=" py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1  dark:text-white">Figma</p>
          <p className="text-gray-800 py-1  dark:text-white">Adobe XD</p>
        </div>
        {/**Web development */}
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800">
          <FaLaptopCode className=" text-8xl text-gray-500" />
          <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
            Web Development
          </h3>
          <p className="py-2  dark:text-white">
            Working with the most recent technologies to create responsive
            solutions
          </p>
          <h4 className=" py-4 text-teal-600">Some Technologies</h4>
          <p className="text-gray-800 py-1  dark:text-white">ReactJS NextJS</p>
          <p className="text-gray-800 py-1  dark:text-white">PHP HTML CSS</p>
          <p className="text-gray-800 py-1  dark:text-white">WordPress</p>
        </div>
        {/**Mobile development */}
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800">
          <ImMobile className=" text-8xl text-gray-500" />
          <h3 className=" text-lg font-medium pt-8 pb-2  dark:text-white">
            Mobile Development
          </h3>
          <p className="py-2  dark:text-white">
            Using the most common and recent development languages/frameworks to
            creat mobile solitions
          </p>
          <h4 className=" py-4 text-teal-600">Technologies</h4>
          <p className="text-gray-800 py-1  dark:text-white">SwiftUI</p>
          <p className="text-gray-800 py-1  dark:text-white">React Native</p>
          <p className="text-gray-800 py-1  dark:text-white">Kotlin</p>
        </div>
      </div>
    </section>
  );
}
