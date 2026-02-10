import React from "react";

// Sample profile images (replace with your own)
const aliceImage = "https://i.pravatar.cc/150?img=32";
const bobImage = "https://i.pravatar.cc/150?img=47";

// GitHub & LinkedIn logos from simple-icons CDN
const githubLogo = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg";
const linkedinLogo = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6
      bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 gap-10">

      <h1 className="text-5xl font-extrabold text-white animate-slideInDown">
        About SecureChat
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn delay-100">
        SecureChat is a cutting-edge, end-to-end encrypted real-time chat application designed to keep your conversations private and secure.
        With a focus on simplicity and reliability, SecureChat allows you to communicate safely with friends, family, and colleagues without worrying about data privacy.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn delay-200">
        Features include:
      </p>

      <ul className="text-gray-300 list-disc list-inside text-left md:text-center animate-fadeIn delay-300">
        <li>End-to-end encryption for complete privacy.</li>
        <li>Real-time messaging with instant delivery.</li>
        <li>Create or join private chat rooms effortlessly.</li>
        <li>Customizable message expiration time from 5 minutes to 2 hours.</li>
        <li>Clean and responsive interface across devices.</li>
      </ul>

      <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn delay-400">
        SecureChat makes private communication easy, safe, and enjoyable for everyone.
      </p>





      {/* Developer 1 */}
      <div className="flex flex-col md:flex-row bg-gray-800 rounded-3xl shadow-lg overflow-hidden max-w-4xl hover:scale-105 transform transition-all duration-300">
        <div className="flex justify-center items-center md:w-1/3 p-6">
          <img
            src={aliceImage}
            alt="Alice"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:w-2/3 gap-3">
          <h2 className="text-2xl font-bold text-white">Alice</h2>
          <p className="text-gray-300">
            🖥️ Frontend Developer. Specializes in creating smooth, responsive, and visually appealing UI using React & TailwindCSS.
            Focused on making private messaging simple and intuitive.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/alicegithub" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/alicelinkedin" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Developer 2 */}
      <div className="flex flex-col md:flex-row-reverse bg-gray-800 rounded-3xl shadow-lg overflow-hidden max-w-4xl hover:scale-105 transform transition-all duration-300">
        <div className="flex justify-center items-center md:w-1/3 p-6">
          <img
            src={bobImage}
            alt="Bob"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:w-2/3 gap-3">
          <h2 className="text-2xl font-bold text-white">Bob</h2>
          <p className="text-gray-300">
            🛠️ Backend Developer. Handles real-time chat, server logic, and encryption to keep messaging secure.
            Passionate about creating reliable and private communication.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/bobgithub" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/boblinkedin" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
