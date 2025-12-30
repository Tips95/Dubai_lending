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
    <section id="tariffs" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Выберите свой тариф
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы предлагаем несколько вариантов обучения для разных потребностей
          </p>
        </div>

        {/* Tariff Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedTariff('week')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              selectedTariff === 'week'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            Неделя - 200 000 ₽
          </button>
          <button
            onClick={() => setSelectedTariff('month')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              selectedTariff === 'month'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            Месяц - 500 000 ₽
          </button>
          <button
            onClick={() => setSelectedTariff('vip')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
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
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-5 md:p-7 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{currentTariff.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold">{currentTariff.price}</span>
                <span className="text-2xl">₽</span>
              </div>
            </div>

            <div className="p-5 md:p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Что входит в тариф:</h4>
              <ul className="space-y-4">
                {currentTariff.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-6 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl"
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

