import { FaGithub,
         FaLinkedin,
         FaFileAlt,
         } from "react-icons/fa";


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center px-28 py-9 gap-20 sm:py-28 sm:px-96">
            <div className="flex flex-col items-center justify-center xl:flex-row xl:items-start xl:gap-24" >
                <div>

                    <div className="flex items-center xl:gap-20">
                        <div>
                            <img className="w-80 h-80 object-cover border rounded-full shadow-xl hidden sm:block" src="src/assets/profile.jpeg" alt="image description"/>
                        </div>
                        <div>
                            <h3 className="text-2xl">Hi &#128075; my name is João, I&apos;m a</h3>
                            <h1 className="text-5xl font-bold pt-4">FRONT-END DEVELOPER</h1>
                            <div className="flex gap-5 text-5xl pt-9">
                                <a href="https://linkedin.com/in/joão-vitor-oliveira-205498198"><FaLinkedin className="transition hover:-translate-y-2 duration-300" /></a>
                                <a href="https://github.com/Jaoovit"><FaGithub className="transition hover:-translate-y-2 duration-300" /></a>
                                <a href=""><FaFileAlt className="transition hover:-translate-y-2 duration-300" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-xl pt-9">
                        <div>I&apos;m 26 years old and I&apos;m a front-end developer with experience creating web applications using JavaScript and CSS frameworks.Click in <Link to="/projects" className="hover:text-amber-400 duration-300"><b>projects</b></Link> to see my work.
                        If you want to learn more about me click in the links bellow to see my Linkedin, GitHub and my curriculum.</div>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)
}

export default Home
