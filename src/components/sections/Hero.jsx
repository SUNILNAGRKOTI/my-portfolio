import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../data/personalInfo';
import { staggerContainer } from '../../utils/motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { HiArrowRight } from 'react-icons/hi';

const hero3DUp = {
  hidden: { opacity: 0, y: 80, rotateX: 25, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const hero3DScale = {
  hidden: { opacity: 0, scale: 0.5, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroSlideIn = {
  hidden: { opacity: 0, x: -60, rotateZ: -3 },
  visible: {
    opacity: 1,
    x: 0,
    rotateZ: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg-hero overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Floating Blobs */}
      <motion.div
        className="floating-blob w-72 h-72 bg-primary-500 top-20 -left-20"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-blob w-96 h-96 bg-accent-pink top-40 -right-32"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="floating-blob w-64 h-64 bg-accent-blue bottom-20 left-1/3"
        animate={{ x: [0, 20, 0], y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Name - 3D scale entrance */}
          <motion.h1
            variants={hero3DScale}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 mt-8"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text bg-gradient-to-r from-primary-400 via-accent-pink to-accent-blue bg-300% animate-gradient-x">
              Sunil
            </span>
          </motion.h1>

          {/* Typewriter - slide in */}
          <motion.div variants={heroSlideIn} className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 h-10">
            <TypeAnimation
              sequence={[
                'Flutter Developer',
                2000,
                'Full-Stack Engineer',
                2000,
                'Mobile App Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-heading font-medium"
            />
          </motion.div>

          {/* Description - 3D perspective up */}
          <motion.p
            variants={hero3DUp}
            className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={heroFadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <motion.a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-pink text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-shadow"
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-colors"
              whileHover={{ scale: 1.05, rotateZ: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats - staggered 3D pop */}
          <motion.div
            variants={heroFadeUp}
            className="flex items-center gap-8 sm:gap-12"
          >
            {personalInfo.stats.map((stat, i) => {
              const numericPart = stat.value.replace(/[^0-9]/g, '');
              const suffix = stat.value.replace(/[0-9]/g, '');
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 1.2 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-white">
                    <AnimatedCounter value={numericPart} suffix={suffix} />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social Links - 3D pop in */}
          <motion.div variants={heroFadeUp} className="flex items-center gap-4 mt-12">
            {personalInfo.social.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                  aria-label={social.name}
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.15, rotateZ: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-400"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
