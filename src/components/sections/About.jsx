import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/motion';
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaMobileAlt } from 'react-icons/fa';

const aboutItems = [
  {
    icon: FaMobileAlt,
    title: 'Mobile Developer',
    description: 'Expertise in Flutter & cross-platform app development with Firebase and real-time features.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaCode,
    title: 'Full-Stack Engineer',
    description: 'Building end-to-end solutions with modern frameworks, REST APIs, and cloud services.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FaGraduationCap,
    title: 'MCA Student',
    description: 'Currently pursuing Masters at Chandigarh University with strong academic foundation.',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A bit about who I am and what I do"
          gradient="from-cyan-400 to-blue-500"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Computer Applications graduate with hands-on experience in
              mobile app development, full-stack engineering, and database management. I enjoy
              building cross-platform applications that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I work primarily with Flutter, Firebase, Java, and Python. I hold certifications
              in Android Development (Meta) and Data Science (IBM), and I'm currently
              pursuing my MCA at Chandigarh University.
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <FaMapMarkerAlt className="text-accent-pink" />
              <span>Bageshwar, Uttarakhand, India</span>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4"
          >
            {aboutItems.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard
                  key={item.title}
                  variants={fadeInRight}
                  className="flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
