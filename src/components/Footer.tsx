
import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com", 
      label: "GitHub" 
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://twitter.com", 
      label: "Twitter" 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: "mailto:example@example.com", 
      label: "Email" 
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-pixel font-bold mb-4">&lt;Dev.Otaku/&gt;</h3>
            <p className="text-gray-400 max-w-md">
              Building the future with code, one line at a time. Blending anime aesthetics with programming to create unique digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
