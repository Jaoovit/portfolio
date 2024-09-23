import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16 gap-20 sm:px-24 lg:px-64 xl:px-96">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl sm:text-4xl text-center">Hi &#128075; my name is João, I&apos;m a</h3>
        <h1 className="text-6xl sm:text-7xl font-bold pt-6 text-center">FULLSTACK DEVELOPER</h1>
        <div className="flex justify-center gap-8 text-4xl sm:text-6xl pt-12">
          <a href="https://linkedin.com/in/joão-vitor-oliveira-205498198">
            <FaLinkedin className="transition hover:text-amber-400 hover:-translate-y-2 duration-300" />
          </a>
          <a href="https://github.com/Jaoovit">
            <FaGithub className="transition hover:text-amber-400 hover:-translate-y-2 duration-300" />
          </a>
          <a href="#">
            <FaFileAlt className="transition hover:text-amber-400 hover:-translate-y-2 duration-300" />
          </a>
        </div>
        <div className="text-lg sm:text-2xl pt-12 max-w-screen-lg">
          <p>
            I&apos;m a 26-year-old full-stack developer, and I&apos;ve been working as a freelancer for a year. I like to build efficient, practical web solutions. I&apos;m always open to learning new technologies and collaborating with colleagues on their projects. Let&apos;s work together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;





