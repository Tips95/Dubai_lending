'use client'

import { useState, FormEvent } from 'react'

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    // В production здесь будет отправка на API
    if (process.env.NODE_ENV === 'development') {
      console.log('Form submitted:', formData)
    }
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#000000' }}>
      {/* Ultra dark background for maximum contrast */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-black"></div>
      
      {/* Elegant animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient waves */}
        <div className="gradient-wave gradient-wave-1"></div>
        <div className="gradient-wave gradient-wave-2"></div>
        <div className="gradient-wave gradient-wave-3"></div>
        
        {/* Minimal grid lines */}
        <div className="grid-lines">
          <div className="grid-line grid-line-h-1"></div>
          <div className="grid-line grid-line-h-2"></div>
          <div className="grid-line grid-line-v-1"></div>
          <div className="grid-line grid-line-v-2"></div>
        </div>
        
        {/* Elegant light sweep */}
        <div className="light-sweep"></div>
        
        {/* Subtle floating dots for extra depth */}
        <div className="floating-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight uppercase px-2 tracking-tight">
            БРОКЕР-ТУР В ДУБАЙ
          </h1>
          
          {/* Sub-headline with animated gradient */}
          <h2 className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold gradient-text-animated uppercase px-2 tracking-tight mt-1 sm:mt-2">
            СТАНЬ УСПЕШНЫМ БРОКЕРОМ!
          </h2>

          {/* Description */}
          <p className="hero-subtitle text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 mt-6 sm:mt-8" style={{ animationDelay: '0.3s' }}>
            Выездной тур в Дубай на неделю или месяц. Личное наставничество от{' '}
            <a 
              href="https://www.instagram.com/terekbaev?igsh=MXIwcG5mbjF6b240dg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-400 transition-colors underline break-words font-semibold"
            >
              Беслана Терекбаева
            </a>
            {' '}и реальные сделки с первого дня.
          </p>

          {/* Features with staggered animation */}
          <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-3 sm:gap-4 md:gap-5 mt-8 sm:mt-10 px-4">
            <div className="feature-item flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-purple-500/30">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">Реальные сделки</span>
            </div>
            <div className="feature-item flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-purple-500/30">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">Наставничество 6 месяцев</span>
            </div>
            <div className="feature-item flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-purple-500/30">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">10 лидов от агентства</span>
            </div>
          </div>
        </div>

        {/* CTA Button with glow effect */}
        <div className="mt-10 sm:mt-12 flex justify-center px-4 hero-subtitle" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-glow w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-white text-base sm:text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 uppercase"
          >
            Получи бесплатную консультацию
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
