'use client'

import { useEffect, useState } from 'react'

export default function AnimatedBlobs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Blob 1 */}
      <div 
        className="absolute w-96 h-96 blob blob-1"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      
      {/* Animated Blob 2 */}
      <div 
        className="absolute w-80 h-80 blob blob-2"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
        }}
      />
      
      {/* Animated Blob 3 */}
      <div 
        className="absolute w-72 h-72 blob blob-3"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.02}px)`
        }}
      />

      {/* Floating geometric shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
      </div>
    </div>
  )
}
