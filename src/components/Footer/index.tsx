import { ReactNode } from "react";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import Info from "./Info";
import {
  FaFacebookF,
  FaYoutube,
  FaGithub,
  FaSnapchatGhost,
} from "react-icons/fa";
const infoList = [
  { icon: <MdLocationPin size={30} />, content: "Zahran Stree/Amman,Jordan" },
  { icon: <MdMail size={30} />, content: "example@mail.com" },
  { icon: <MdPhone size={30} />, content: "+9627999999999" },
];
const socialList = [
  { icon: <FaFacebookF size={30} /> },
  { icon: <FaYoutube size={30} /> },
  { icon: <FaGithub size={30} /> },
  { icon: <FaSnapchatGhost size={30} /> },
];
const Footer = () => {
  return (
    <footer className="flex flex-col items-center h-[60vh] snap-start bg-gradient-to-r from-slate-200  via-slate-300 to-slate-200 text-slate-900 p-4 md:flex-row">
      <section className="flex-1 flex flex-col justify-center md:gap-10 h-full">
        {infoList.map((info, index) => {
          return <Info key={index} icon={info.icon} content={info.content} />;
        })}
      </section>
      <section className="flex-1 h-full flex flex-col gap-4 justify-center mt-5 text-center md:gap-16 md:text-start">
        <h3 className="text-2xl font-bold">About the company</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio rem
          veritatis possimus neque blanditiis vero repudiandae optio porro
          obcaecati odit.
        </p>
        <div className="flex justify-around w-full md:justify-start md:gap-16">
          {socialList.map(({ icon }, index) => {
            return (
              <i
                key={index}
                className="bg-slate-950 text-slate-200 rounded p-2 "
              >
                {icon}
              </i>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
