import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass-card p-6 ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary-500/5' : ''} transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
