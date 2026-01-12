'use client'

import React from 'react'

export default function FloatingParticles() {
  return (
    <div className="premium-animation-container">
      {/* Плавающие светящиеся частицы */}
      <div className="stars-layer">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Пульсирующие градиентные орбы */}
      <div className="orbs-layer">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="orb orb-5" />
      </div>

      {/* Плавающие светящиеся линии */}
      <div className="glow-lines-layer">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="glow-line"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
              transform: `rotate(${-45 + i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* Волны/рябь */}
      <div className="waves-layer">
        <div className="wave wave-1" />
        <div className="wave wave-2" />
        <div className="wave wave-3" />
      </div>
    </div>
  )
}
