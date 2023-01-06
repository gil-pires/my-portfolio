import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Portfolio() {
  return (
    <section>
      <div className=" text-center p-10">
        <h3 className="text-3xl py-1  dark:text-white">Portfolio</h3>
        <p className="text-md py-5 leading-8 text-gray-80  dark:text-white">
          I've been working in many projects, including development of
          <span className="text-teal-500"> Websites, Dashboards</span> and{" "}
          <span className="text-teal-500">Mobile Applicatinons</span>
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/5 flex-1">
          <Image
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/4 flex-1">
          <Image
            src={web2}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/4 flex-1">
          <Image
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/4 flex-1">
          <Image
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/4 flex-1">
          <Image
            src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/4 flex-1">
          <Image
            src={web6}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}
