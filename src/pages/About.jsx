import { FaHtml5,
         FaCss3Alt,
         FaReact,
         FaSass } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const About = () => {
  return (
    <div>
      <div>
          <img className="object-cover border rounded-full shadow-xl" src="src/assets/profile.jpeg" alt="image description"/>
      </div>
      <div className="flex text-4xl gap-9 justify-end">
          <FaHtml5 className="text-orange-500"/>
          <FaCss3Alt className="text-blue-400"/>
          <IoLogoJavascript className="text-yellow-400"/>
          <FaReact className="text-blue-400"/>
          <SiRedux className="text-purple-500"/>
          <FaSass className="text-pink-500"/>
          <RiTailwindCssFill className="text-blue-400"/>
      </div>
    </div>
  )
}

export default About
