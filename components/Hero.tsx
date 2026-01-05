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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-purple-900/30 to-black"></div>
      
      {/* Wave Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Wave shapes */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight animate-fade-in uppercase px-2 tracking-tight">
            БРОКЕР-ТУР В ДУБАЙ
          </h1>
          
          {/* Sub-headline with gradient */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold gradient-text-purple-pink animate-slide-up uppercase px-2 tracking-tight">
            СТАНЬ УСПЕШНЫМ БРОКЕРОМ!
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-snug animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
            Выездной тур в Дубай на неделю или месяц. Личное наставничество от{' '}
            <a 
              href="https://www.instagram.com/terekbaev?igsh=MXIwcG5mbjF6b240dg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-400 transition-colors underline break-words"
            >
              Беслана Терекбаева
            </a>
            {' '}и реальные сделки с первого дня.
          </p>

          {/* Features */}
          <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">Наставничество 6 месяцев</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">Реальные сделки</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">10 лидов от агентства</span>
            </div>
          </div>
        </div>

        {/* CTA Button at bottom */}
        <div className="mt-6 sm:mt-8 flex justify-center animate-scale-in px-4" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-base sm:text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Получите бесплатную консультацию
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
