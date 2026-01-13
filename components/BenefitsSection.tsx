'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BenefitsSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 })
  const keyBenefits = [
    {
      title: 'Наставничество от профессионала',
      description: 'Личное наставничество от Беслана Терекбаева в течение 6 месяцев',
    },
    {
      title: 'Реальные сделки с первого дня',
      description: '10 лидов от агентства StepDream во время брокер-тура',
    },
    {
      title: 'VIP онлайн курс в подарок',
      description: 'Доступ на год стоимостью 180 000 ₽ - это дополнительный бонус',
    },
    {
      title: 'Закрытый клуб на 6 месяцев',
      description: 'Доступ в клуб "Успешный брокер" за 180 000 ₽ - это дополнительный бонус',
    },
    {
      title: 'Профессиональный контент',
      description: 'Фото и видео для личного бренда на целый год',
    },
    {
      title: 'Персональный сайт',
      description: 'Создание вашего личного сайта для работы',
    },
    {
      title: 'Знакомство с топ-менеджерами',
      description: 'Личное знакомство с топ-менеджерами ведущих застройщиков ОАЭ',
    },
    {
      title: 'Практические тренинги',
      description: 'Тренинги по продажам, SMM, съемке, ораторскому искусству',
    },
  ]

  return (
    <section id="benefits" className="section-padding bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 sm:mb-14 px-4 section-transition ${titleAnimation.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-5 sm:mb-7 tracking-tight uppercase leading-tight">
            Ключевые преимущества программы
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Все необходимое для успешного старта карьеры брокера по зарубежной недвижимости
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 stagger-animation ${cardsAnimation.isVisible ? 'is-visible' : ''}`}
        >
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="card-3d gradient-border bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-7 border border-white/10 transition-all hover:bg-white/10 group flex flex-col min-h-[280px] sm:min-h-[300px]"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white mb-3 uppercase tracking-tight leading-tight break-words hyphens-auto">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed break-words flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          ref={ctaAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`mt-10 sm:mt-14 text-center px-4 section-transition ${ctaAnimation.isVisible ? 'is-visible' : ''}`}
        >
          <div className="gradient-border-always inline-block bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 rounded-3xl p-8 sm:p-10 md:p-12 text-white max-w-4xl w-full shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-5 sm:mb-6 tracking-tight uppercase leading-tight">
              Начни зарабатывать уже с первого дня
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 leading-relaxed max-w-2xl mx-auto">
              Получите реальные комиссии в долларах от совместных сделок с агентством StepDream
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-purple-600 rounded-xl font-bold text-lg sm:text-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-xl uppercase"
            >
              Записаться на программу
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

