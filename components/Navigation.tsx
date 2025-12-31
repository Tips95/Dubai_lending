'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            StepDream Academy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Записаться
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-black/95 backdrop-blur-md rounded-lg mt-2">
            <Link
              href="#program"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-purple-400 transition-colors px-4"
            >
              О программе
            </Link>
            <Link
              href="#tariffs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-purple-400 transition-colors px-4"
            >
              Тарифы
            </Link>
            <Link
              href="#benefits"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-purple-400 transition-colors px-4"
            >
              Преимущества
            </Link>
            <Link
              href="#earnings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-purple-400 transition-colors px-4"
            >
              Заработок
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full mx-4 px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Записаться
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
