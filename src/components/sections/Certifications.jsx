import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInUp, staggerContainer } from '../../utils/motion';
import { certifications, competencies } from '../../data/certifications';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="floating-blob w-72 h-72 bg-accent-rose -top-10 right-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Certifications & Competencies"
          subtitle="Professional certifications and core competencies"
          gradient="from-rose-400 to-orange-400"
        />

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <GlassCard
                key={cert.title}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-white font-heading font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {cert.issuer} &middot; {cert.year}
                </p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </GlassCard>
            );
          })}
        </motion.div>

        {/* Competencies */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: 'Technical', items: competencies.technical, gradient: 'from-violet-500 to-purple-600' },
            { title: 'Analytical', items: competencies.analytical, gradient: 'from-cyan-500 to-blue-600' },
            { title: 'Soft Skills', items: competencies.soft, gradient: 'from-emerald-500 to-teal-600' },
            { title: 'Languages', items: competencies.languages, gradient: 'from-orange-500 to-amber-600' },
          ].map((group) => (
            <GlassCard key={group.title} variants={fadeInUp}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1 h-6 bg-gradient-to-b ${group.gradient} rounded-full`} />
                <h4 className="text-white font-heading font-semibold">{group.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
