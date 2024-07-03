import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
        <h3>Hi &#128075; my name is João</h3>
        <h1>FRONT-END DEVELOPER</h1>
        <p className="icon">
            <p><a href="https://linkedin.com/in/joão-vitor-oliveira-205498198"><FaLinkedin /></a></p>
            <p><a href="https://github.com/Jaoovit"><FaGithub /></a></p>
            <p><a href=""></a><FaFileAlt /></p>
        </p>
        <p>I&apos;m 26 years old I&apos;m a frontend developer with knowledge of user interfaces and experience in projects that use JavaScript libraries and Css frameworks.</p>
    </div>
)
}

export default Home
