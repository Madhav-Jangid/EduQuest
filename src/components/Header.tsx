import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DownloadButton from './DownloadButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`px-12 fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            EduQuest
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
            Features
          </a>
          <a href="#app" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
            App
          </a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
            Contact
          </a>
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
          <DownloadButton size="sm" />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-slate-900 z-40 flex flex-col items-center pt-10 space-y-8">
          <a
            href="#features"
            className="text-xl font-medium text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#app"
            className="text-xl font-medium text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            App
          </a>
          <a
            href="#testimonials"
            className="text-xl font-medium text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-xl font-medium text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <DownloadButton size="default" onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;