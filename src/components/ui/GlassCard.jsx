import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current || !hover) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      rotateX: ((y - centerY) / centerY) * -8,
      rotateY: ((x - centerX) / centerX) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`glass-card p-6 ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary-500/5' : ''} transition-colors duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.2s ease-out',
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
