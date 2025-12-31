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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Wave Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in uppercase whitespace-nowrap">
            БРОКЕР-ТУР В ДУБАЙ
          </h1>
          
          {/* Sub-headline with gradient */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-purple-pink animate-slide-up uppercase whitespace-nowrap">
            СТАНЬ УСПЕШНЫМ БРОКЕРОМ!
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Выездной тур в Дубай на неделю или месяц. Личное наставничество от{' '}
            <a 
              href="https://www.instagram.com/terekbaev?igsh=MXIwcG5mbjF6b240dg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-400 transition-colors underline"
            >
              Беслана Терекбаева
            </a>
            {' '}и реальные сделки с первого дня.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Наставничество 6 месяцев</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Реальные сделки</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">10 лидов от агентства</span>
            </div>
          </div>
        </div>

        {/* CTA Button at bottom */}
        <div className="mt-8 flex justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
