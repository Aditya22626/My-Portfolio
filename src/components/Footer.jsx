import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800/40 mt-10 py-12 bg-neutral-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Aditya Kaushik</h3>
            <p className="text-neutral-400 mb-4">Full Stack Developer specializing in Python, Java, C++ and AI solutions. Building innovative web applications with modern technologies.</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Aditya22626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-kaushik-b4b00b338/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#technologies" className="text-neutral-400 hover:text-indigo-400 transition-colors">Technologies</a></li>
              <li><a href="#experience" className="text-neutral-400 hover:text-indigo-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-neutral-400 hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <p className="text-neutral-400 mb-2">Sonipat, Haryana, India</p>
            <p className="text-neutral-400 mb-4">adityakaushik22626@gmail.com</p>
            <a 
              href="https://drive.google.com/file/d/1QschMXxYlsOHpSe4U9TcrYYQ2XoZSRNj/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600/80 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800/40 text-center">
          <p className="text-neutral-500">&copy; {new Date().getFullYear()} Aditya Kaushik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 