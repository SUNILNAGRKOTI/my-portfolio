import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motion';
import GradientText from './GradientText';

const SectionHeading = ({ title, subtitle, gradient }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        <GradientText gradient={gradient}>{title}</GradientText>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`w-24 h-1 bg-gradient-to-r ${gradient} mx-auto mt-6 rounded-full`} />
    </motion.div>
  );
};

export default SectionHeading;
