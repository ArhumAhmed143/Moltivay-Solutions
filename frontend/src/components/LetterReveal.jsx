import React from 'react';
import { motion } from 'framer-motion';

const plainText = (children) => React.Children.toArray(children).map((child) => {
  if (typeof child === 'string' || typeof child === 'number') return child;
  if (React.isValidElement(child)) return plainText(child.props.children);
  return '';
}).join('');

const animateChildren = (children, speed, prefix = 'text') => React.Children.map(children, (child, childIndex) => {
  const key = `${prefix}-${childIndex}`;

  if (typeof child === 'string') {
    return child.split(/(\s+)/).map((token, tokenIndex) => {
      if (/^\s+$/.test(token)) return token;

      return (
        <motion.span key={`${key}-${tokenIndex}`} variants={{ visible: { transition: { staggerChildren: speed === 'headline' ? 0.045 : 0.012 } } }} aria-hidden="true" className="inline-block">
          {[...token].map((letter, letterIndex) => (
            <motion.span
              key={`${key}-${tokenIndex}-${letterIndex}`}
              variants={speed === 'headline'
                ? { hidden: { opacity: 0, y: 24, scale: 0.7 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 15 } } }
                : { hidden: { opacity: 0, y: 7 }, visible: { opacity: 1, y: 0, transition: { duration: 0.16, ease: 'easeOut' } } }
              }
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      );
    });
  }

  if (React.isValidElement(child) && child.props.children != null) {
    return React.cloneElement(child, {
      children: animateChildren(child.props.children, speed, key),
    });
  }

  return child;
});

const LetterReveal = ({ as = 'span', speed = 'paragraph', className, children }) => {
  const MotionElement = motion[as];
  const variants = {
    hidden: {},
    visible: {
      transition: speed === 'headline'
        ? { staggerChildren: 0.28, delayChildren: 0.15 }
        : { staggerChildren: 0.055, delayChildren: 0.1 },
    },
  };

  return (
    <MotionElement
      variants={variants}
      initial="hidden"
      animate="visible"
      aria-label={plainText(children)}
      className={className}
    >
      {animateChildren(children, speed)}
    </MotionElement>
  );
};

export default LetterReveal;