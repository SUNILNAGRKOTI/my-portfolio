import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../data/personalInfo';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { HiDownload, HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg-hero overflow-hidden"
    >
      {/* Floating Blobs */}
      <div className="floating-blob w-72 h-72 bg-primary-500 top-20 -left-20" />
      <div className="floating-blob w-96 h-96 bg-accent-pink top-40 -right-32" style={{ animationDelay: '2s' }} />
      <div className="floating-blob w-64 h-64 bg-accent-blue bottom-20 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 mt-8"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text bg-gradient-to-r from-primary-400 via-accent-pink to-accent-blue bg-300% animate-gradient-x">
              Sunil
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 h-10">
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

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-pink text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-8 sm:gap-12"
          >
            {personalInfo.stats.map((stat) => {
              const numericPart = stat.value.replace(/[^0-9]/g, '');
              const suffix = stat.value.replace(/[0-9]/g, '');
              return (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-white">
                    <AnimatedCounter value={numericPart} suffix={suffix} />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-12">
            {personalInfo.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
