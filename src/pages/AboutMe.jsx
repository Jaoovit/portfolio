import profilePhoto from '../assets/new-profile-photo.jpeg';

const AboutMe = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-8 py-16 sm:px-24 lg:px-64 xl:px-96">
        <h2 className="text-4xl sm:text-5xl font-bold pb-12 text-center">ABOUT ME</h2>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          
          <div className="flex flex-col items-center sm:items-start max-w-3xl">
            <p className="text-lg sm:text-2xl leading-relaxed text-center sm:text-left">
              I am João Vitor, a passionate full-stack developer with a background in both frontend and backend technologies. 
              I have a strong foundation in JavaScript, React, Node.js, and I am constantly exploring new frameworks and tools to expand my skill set.
            </p>
            <p className="text-lg sm:text-2xl leading-relaxed pt-6 text-center sm:text-left">
              My journey began with a deep curiosity for how the web works, leading me to pursue a career where I can create innovative solutions that make an impact. 
              Over the past year.
            </p>
            <p className="text-lg sm:text-2xl leading-relaxed pt-6 text-center sm:text-left">
              I enjoy reading about new tech trends, and honing my skills in problem-solving. 
              I believe in continuous learning, and I am always eager to take on new challenges that push me out of my comfort zone.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={profilePhoto}
              alt="João Vitor"
              className="rounded max-w-xs w-full sm:w-80 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  
  
  
  