import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import SkillBar from '../ui/SkillBar';
import { fadeInUp, staggerContainer } from '../../utils/motion';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background decoration */}
      <div className="floating-blob w-80 h-80 bg-accent-orange -top-20 -right-20" />
      <div className="floating-blob w-64 h-64 bg-accent-emerald bottom-20 -left-20" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
          gradient="from-orange-400 via-yellow-400 to-emerald-400"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <GlassCard
              key={category.title}
              variants={fadeInUp}
              className="group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`} />
                <h3 className="text-white font-heading font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    gradient={category.color}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
