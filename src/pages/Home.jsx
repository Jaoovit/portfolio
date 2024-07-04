import { FaGithub,
         FaLinkedin,
         FaFileAlt,
         FaHtml5,
         FaCss3Alt,
         FaReact,
         FaSass } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center px-28 py-28 gap-20">
            <div className="flex flex-col items-center justify-center xl:flex-row xl:items-start gap-24" >
                <div>
                    <img className="object-cover border rounded-full shadow-xl" src="src/assets/profile.jpeg" alt="image description"/>
                </div>
                <div className="flex flex-col gap-9">
                    <h3 className="text-2xl">Hi &#128075; my name is João, I&apos;m a</h3>
                    <h1 className="text-5xl font-bold">FRONT-END DEVELOPER</h1>
                    <div className="flex gap-5 text-5xl pt-9">
                        <a href="https://linkedin.com/in/joão-vitor-oliveira-205498198"><FaLinkedin className="transition hover:-translate-y-2 duration-300" /></a>
                        <a href="https://github.com/Jaoovit"><FaGithub className="transition hover:-translate-y-2 duration-300" /></a>
                        <a href=""><FaFileAlt className="transition hover:-translate-y-2 duration-300" /></a>
                    </div>
                    <div className="text-xl pt-9">
                        <p>I&apos;m 26 years old and I&apos;m a front-end developer with experience creating web applications using JavaScript and CSS frameworks.Click in <Link to="/projects" className="hover:text-amber-400 duration-300"><b>projects</b></Link> to see my work</p>                       
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
            </div>
        </div>
    </div>
    
)
}

export default Home
