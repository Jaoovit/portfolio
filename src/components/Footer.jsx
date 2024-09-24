import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-8 sm:px-16">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-lg font-semibold">Contact Me</h3>
          <p className="mt-1">jaoovit@gmail.com</p>
        </div>
        <div className="flex gap-6 mt-6 sm:mt-0">
          <a href="https://linkedin.com/in/joão-vitor-oliveira-205498198" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-amber-400 transition duration-300" />
          </a>
          <a href="https://github.com/Jaoovit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-amber-400 transition duration-300" />
          </a>
          <a href="mailto:jaoovit@gmail.com">
            <FaEnvelope className="text-3xl hover:text-amber-400 transition duration-300" />
          </a>
        </div>
        <div className="mt-6 sm:mt-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} João Vitor Oliveira</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
