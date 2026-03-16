import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-heading font-bold text-xl text-white">
              Sunil<span className="text-primary-400">.dev</span>
            </a>
            <p className="text-gray-500 text-sm mt-1">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {personalInfo.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-end">
              Made with <FaHeart className="text-accent-pink text-xs" /> by Sunil Nagarkoti
            </p>
            <p className="text-gray-600 text-xs mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
