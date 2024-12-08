import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Ritochit
        </motion.h1>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

const NavLinks = () => {
  const links = ['About', 'Skills', 'Projects', 'Blog', 'Contact'];
  
  return (
    <>
      {links.map((link) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          {link}
        </motion.a>
      ))}
      <motion.a
        href="/resume.pdf"
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        Resume
      </motion.a>
    </>
  );
};