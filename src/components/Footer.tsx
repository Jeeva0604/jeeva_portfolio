import React from "react";
import { portfolioData } from "@/assets/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-gray-400">{portfolioData.personalInfo.role}</p>
          </div>

          <nav className="flex gap-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} {portfolioData.personalInfo.name}. All rights
            reserved.
          </p>

          <div className="mt-4 md:mt-0 flex gap-4">
            <a
              href={`https://instagram.com/${portfolioData.contact.instagram}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={`https://github.com/${portfolioData.contact.github}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={`https://linkedin.com/in/${portfolioData.contact.linkedin}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
