import { motion } from 'framer-motion';

const SkillBar = ({ name, level, icon: Icon, gradient = 'from-primary-500 to-accent-pink' }) => {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-lg text-gray-400 group-hover:text-white transition-colors" />}
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
