const spring = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: spring },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: spring },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60, rotateY: 10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.7, ease: spring },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60, rotateY: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.7, ease: spring },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.7, rotateZ: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { duration: 0.6, ease: spring },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};
