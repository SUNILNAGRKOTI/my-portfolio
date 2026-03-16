import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInUp, staggerContainer } from '../../utils/motion';
import { projects } from '../../data/projects';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

const ScreenshotGallery = ({ screenshots, gradient }) => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      {/* Horizontal scrollable gallery */}
      <div className="mt-6 -mx-2">
        <div className="flex gap-3 overflow-x-auto pb-3 px-2 scrollbar-thin">
          {screenshots.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className={`rounded-xl overflow-hidden border border-white/10 hover:border-white/25 transition-all shadow-lg hover:shadow-xl`}>
                <img
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="h-52 w-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <HiX size={24} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
              }}
              className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <HiChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={screenshots[lightbox]}
              alt={`Screenshot ${lightbox + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <HiChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 text-white/60 text-sm">
              {lightbox + 1} / {screenshots.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="floating-blob w-72 h-72 bg-accent-pink -top-10 right-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some things I've built"
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

                  {/* Screenshots Gallery */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <ScreenshotGallery screenshots={project.screenshots} gradient={project.gradient} />
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 mt-6">
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
