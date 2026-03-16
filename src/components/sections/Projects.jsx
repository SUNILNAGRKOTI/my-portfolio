import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInUp, staggerContainer } from '../../utils/motion';
import { projects } from '../../data/projects';
import { HiExternalLink } from 'react-icons/hi';

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="floating-blob w-72 h-72 bg-accent-pink -top-10 right-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Applications I've built that showcase my skills"
          gradient="from-violet-400 to-pink-500"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              variants={fadeInUp}
              className="overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Project Color Accent */}
                <div className={`lg:w-2 w-full h-2 lg:h-auto bg-gradient-to-b ${project.gradient} rounded-full flex-shrink-0`} />

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white mb-3`}>
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
