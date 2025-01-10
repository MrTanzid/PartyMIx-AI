import React from 'react';

export function MusicWave() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Animated wave bars */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full transform-gpu"
          style={{
            height: '70%',
            left: `${i * 30}%`,
            animation: `musicWave ${1 + i * 0.2}s ease-in-out infinite alternate`,
            filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))'
          }}
        />
      ))}
      
      {/* Pulsing glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl rounded-full animate-pulse" />
      
      {/* Rotating ring */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-[spin_4s_linear_infinite] opacity-30" 
           style={{ backgroundClip: 'border-box' }} />
    </div>
  );
}