import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Ritochit Ghosh
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate B.Tech CSE student & Full Stack Developer
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <SocialLink href="https://github.com/ritochit" icon={Github} />
            <SocialLink href="https://linkedin.com/in/ritochit" icon={Linkedin} />
            <SocialLink href="https://twitter.com/ritochit" icon={Twitter} />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);