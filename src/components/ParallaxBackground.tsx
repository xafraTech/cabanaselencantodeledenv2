import React, { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  imageUrl: string;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl,
  speed = 0.5,
  className = '',
  children
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translate3d(0, ${scrollY * speed}px, 0)`,
          scale: '1.1'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;