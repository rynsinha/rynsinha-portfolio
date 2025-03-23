
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Code, User, Mail, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  const navLinks = [
    { path: "/", label: "Home", icon: <Home className="mr-1 h-4 w-4" /> },
    { path: "/projects", label: "Projects", icon: <Code className="mr-1 h-4 w-4" /> },
    { path: "/about", label: "About", icon: <User className="mr-1 h-4 w-4" /> },
    { path: "/contact", label: "Contact", icon: <Mail className="mr-1 h-4 w-4" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "py-2 bg-black/80 backdrop-blur-md shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-pixel text-xl font-bold text-white transition-transform duration-300 hover:scale-105"
            onClick={closeMenu}
          >
            <Github className="h-6 w-6" />
            <span className="relative">
              &lt;Dev.Otaku/&gt;
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white"></span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link flex items-center text-sm font-medium transition-colors duration-300",
                  location.pathname === link.path 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden items-center justify-center text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/90 backdrop-blur-md transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center text-lg font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "text-white scale-110"
                  : "text-gray-400 hover:text-white hover:scale-110"
              )}
              onClick={closeMenu}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
