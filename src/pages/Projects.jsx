import movieLibraryImage from "../assets/movie-library-image.png";
import fileUploaderImage from "../assets/file-uploader-image.png";
import blogApiImage from "../assets/blog-api-image.png";

const Projects = () => {
  const projectData = [
    {
      title: "Movie Library",
      description: "A collection of movies, allowing users to browse through various titles, view detailed descriptions, and explore related information like genres, release years, and ratings.",
      link: "https://movie-library-mauve.vercel.app/",
      image: movieLibraryImage
    },
    {
      title: "File Uploader",
      description: "A storage service that allows users to store and share files. With its user-friendly interface, you can upload documents, photos, and videos, access them from anywhere.",
      link: "https://file-uploader-q6uq.onrender.com/",
      image: fileUploaderImage
    },
    {
      title: "Blog API",
      description: "A RESTful API built with Node.js, Express, featuring user authentication with JWT and CRUD operations for managing blog. It uses Sequelize for database interactions",
      link: "https://github.com/Jaoovit/blog-API",
      image: blogApiImage
    }
  ];

  return (
    <div className="grid justify-items-stretch gap-10 pb-20 mx-8 sm:mx-16 lg:mx-32">
      <h1 className="text-5xl justify-self-center font-bold mb-10 text-center">PROJECTS</h1>
      <div className="flex flex-col gap-10">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row border p-6 rounded-lg shadow-md">
          <div className="w-full md:w-1/2 flex justify-center items-center border border-gray-200 p-4 rounded-md">
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-48 object-cover rounded-md" 
              style={{ height: '300px' }} // Keeps the image height consistent
            />
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2 text-center">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Projects;



