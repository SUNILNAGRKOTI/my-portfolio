import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';
import { education } from '../../data/education';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="floating-blob w-64 h-64 bg-accent-blue -top-10 -left-10" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and qualifications"
          gradient="from-blue-400 to-cyan-400"
        />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                  <FaGraduationCap className="text-white text-sm" />
                </div>
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded bg-gradient-to-r ${edu.gradient} text-white`}>
                      {edu.period}
                    </span>
                    {edu.current && (
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-heading font-semibold text-lg mt-2">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                  {edu.grade && (
                    <p className="text-gray-500 text-sm mt-2 font-mono">{edu.grade}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
