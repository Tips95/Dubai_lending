'use client'

import { useState } from 'react'

export default function TariffsSection() {
  const [selectedTariff, setSelectedTariff] = useState<'week' | 'month' | 'vip'>('week')

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
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Выберите свой тариф
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы предлагаем несколько вариантов обучения для разных потребностей
          </p>
        </div>

        {/* Tariff Selector */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 px-4">
          <button
            onClick={() => setSelectedTariff('week')}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all text-sm sm:text-base ${
              selectedTariff === 'week'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            Неделя - 200 000 ₽
          </button>
          <button
            onClick={() => setSelectedTariff('month')}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all text-sm sm:text-base ${
              selectedTariff === 'month'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            Месяц - 500 000 ₽
          </button>
          <button
            onClick={() => setSelectedTariff('vip')}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all text-sm sm:text-base ${
              selectedTariff === 'vip'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            ВИП онлайн - 179 990 ₽
          </button>
        </div>

        {/* Tariff Card */}
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-5 md:p-7 text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-2 tracking-tight">{currentTariff.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">{currentTariff.price}</span>
                <span className="text-xl sm:text-2xl">₽</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-8">
              <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 sm:mb-6 tracking-tight">Что входит в тариф:</h4>
              <ul className="space-y-3 sm:space-y-4">
                {currentTariff.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-300 text-sm sm:text-base md:text-lg font-bold uppercase break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-4 sm:mt-6 w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-base sm:text-lg md:text-xl hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl"
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

