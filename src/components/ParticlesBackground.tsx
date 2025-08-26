import React from 'react';

interface ParticlesBackgroundProps {
  isDark: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ isDark }) => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Placeholder pour les particules - nous utiliserons une version CSS simple */}
      <div className="particles-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-white' : 'bg-gray-600'} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
