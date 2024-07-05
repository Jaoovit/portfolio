import { FaHtml5,
         FaCss3Alt,
         FaReact,
         FaSass } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 sm:py-9 sm:px-96">
      <img className="object-cover border rounded-full shadow-xl" src="src/assets/profile.jpeg" alt="image description"/>
      <div className="flex flex-col gap-9">
        <div className="text-xl">
          My name is João Oliveira, I&apos;m Brazilian, I currently live in the city of Guimarães in Portugal.
          I spend most of my time learning about new technologies to increase my problem-solving ability
          and create great apps. I have experience with the standard web package, HTML, CSS and JavaScript,
          and the most modern libraries and frameworks such as ReactJs, Redux, Tailwind, Sass and some others.
        </div>
        <div className="flex flex-row gap-9 text-4xl justify-end pb-9">
            <FaHtml5 className="text-orange-500"/>
            <FaCss3Alt className="text-blue-400"/>
            <IoLogoJavascript className="text-yellow-400"/>
            <FaReact className="text-blue-400"/>
            <SiRedux className="text-purple-500"/>
            <FaSass className="text-pink-500"/>
            <RiTailwindCssFill className="text-blue-400"/>
        </div>
      </div>  
    </div>
  )
}

export default About
