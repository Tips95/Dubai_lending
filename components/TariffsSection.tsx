'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function TariffsSection() {
  const [selectedTariff, setSelectedTariff] = useState<'week' | 'month' | 'vip'>('week')
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 })

  const tariffs = {
    week: {
      title: 'Брокер-Тур на неделю',
      price: '200 000',
      period: 'неделя',
      features: [
        'Поездка в Дубай на неделю',
        'Проживание и трансфер в Дубае',
        'VIP онлайн курс за 180 000 ₽ (бонус)',
        'Доступ в клуб "Успешный брокер" на 6 месяцев (бонус)',
        'Личное наставничество от Беслана Терекбаева (6 месяцев)',
        'Знакомство с топ-менеджерами застройщиков',
        'Тренинги по продажам, SMM, съемке, ораторству',
        'Профессиональный контент для личного бренда',
        'Съемка подкаста',
        'Персональный сайт',
        'Доступ к платформе поиска недвижимости (6 месяцев)',
        '10 лидов от агентства StepDream',
        'Путешествие по персидскому заливу на корабле',
        'Сертификат о прохождении обучения',
      ],
    },
    month: {
      title: 'Брокер-Тур на месяц',
      price: '500 000',
      period: 'месяц',
      features: [
        'Поездка в Дубай на месяц',
        'Проживание и трансфер в Дубае',
        'VIP онлайн курс за 180 000 ₽ (бонус)',
        'Доступ в клуб "Успешный брокер" на 6 месяцев (бонус)',
        'Личное наставничество от Беслана Терекбаева (6 месяцев)',
        'Знакомство с топ-менеджерами застройщиков',
        'Тренинги по продажам, SMM, съемке, ораторству',
        'Профессиональный контент для личного бренда',
        'Съемка подкаста',
        'Персональный сайт',
        'Доступ к платформе поиска недвижимости (6 месяцев)',
        '10 лидов от агентства StepDream',
        'Путешествие по персидскому заливу на корабле',
        'Сертификат о прохождении обучения',
        'Расширенная программа обучения',
        'Больше времени на практику',
      ],
    },
    vip: {
      title: 'ВИП с поддержкой куратора',
      price: '179 990',
      period: 'онлайн',
      features: [
        '18 модулей обучения на платформе',
        'Чат тарифа VIP с куратором в Telegram',
        'Экзамен и сертификат',
        'Гайды и бонусные чек-листы',
        'Эксклюзивный доступ к базе объектов StepDream',
        'Контент для социальных сетей',
        'Совместная работа с агентством StepDream',
        'Модуль по личному бренду',
        'Модуль по английскому языку',
        'Модуль по искусственному интеллекту',
        'Онлайн-встречи с застройщиками',
        'Модуль по голосу и ораторскому искусству',
        'Возможность участия в выездных турах',
        'Личный наставник по Instagram',
        'Вступление в клуб "Успешный Брокер" на 6 месяцев (бонус 180 000 ₽)',
      ],
    },
  }

  const currentTariff = tariffs[selectedTariff] as typeof tariffs.week

  return (
    <section id="tariffs" className="section-padding bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 sm:mb-12 section-transition ${titleAnimation.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-5 sm:mb-7 tracking-tight uppercase leading-tight">
            Выберите свой тариф
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Мы предлагаем несколько вариантов обучения для разных потребностей
          </p>
        </div>

        {/* Tariff Selector */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mb-8 sm:mb-10 px-4">
          <button
            onClick={() => setSelectedTariff('week')}
            className={`w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-5 rounded-2xl font-bold transition-all text-base sm:text-lg ${
              selectedTariff === 'week'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:scale-105'
            }`}
          >
            Неделя - 200 000 ₽
          </button>
          <button
            onClick={() => setSelectedTariff('month')}
            className={`w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-5 rounded-2xl font-bold transition-all text-base sm:text-lg ${
              selectedTariff === 'month'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:scale-105'
            }`}
          >
            Месяц - 500 000 ₽
          </button>
          <button
            onClick={() => setSelectedTariff('vip')}
            className={`w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-5 rounded-2xl font-bold transition-all text-base sm:text-lg ${
              selectedTariff === 'vip'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:scale-105'
            }`}
          >
            ВИП онлайн - 179 990 ₽
          </button>
        </div>

        {/* Tariff Card */}
        <div 
          ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto section-transition ${cardAnimation.isVisible ? 'is-visible' : ''}`}
        >
            <div className="card-3d bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8 md:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-3 tracking-tight leading-tight">{currentTariff.title}</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold">{currentTariff.price}</span>
                <span className="text-2xl sm:text-3xl">₽</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 sm:mb-8 tracking-tight uppercase">Что входит в тариф:</h4>
              <ul className="space-y-4 sm:space-y-5">
                {currentTariff.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200 text-base sm:text-lg md:text-xl font-semibold break-words leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-8 sm:mt-10 w-full py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg sm:text-xl md:text-2xl hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all shadow-xl uppercase"
              >
                Записаться на программу
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

