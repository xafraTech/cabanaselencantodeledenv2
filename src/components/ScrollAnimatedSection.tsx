import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'parallax';
  delay?: number;
  duration?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  duration = 800
}) => {
  const { elementRef, isVisible, scrollY } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeUp':
          return `${baseClasses} opacity-0 translate-y-12`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 -translate-x-12`;
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-12`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'parallax':
          return `${baseClasses} opacity-0 translate-y-8`;
        default:
          return `${baseClasses} opacity-0 translate-y-12`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  const getParallaxTransform = () => {
    if (animationType === 'parallax' && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const speed = 0.5;
      const yPos = -(scrollY * speed);
      return { transform: `translate3d(0, ${yPos}px, 0)` };
    }
    return {};
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...getParallaxTransform()
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;