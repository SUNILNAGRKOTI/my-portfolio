import { motion } from 'framer-motion';

const GradientText = ({ children, className = '', gradient = 'from-primary-400 via-accent-pink to-accent-blue' }) => {
  return (
    <span className={`gradient-text bg-gradient-to-r ${gradient} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
