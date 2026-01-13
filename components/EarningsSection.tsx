'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function EarningsSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const cardsAnimation = useScrollAnimation({ threshold: 0.1, delay: 200 })
  const prefAnimation = useScrollAnimation({ threshold: 0.1, delay: 400 })
  const earnings = [
    {
      type: 'Студия (Studio)',
      range: '$4 000 – $5 000',
      average: 'за одну продажу',
    },
    {
      type: '1 Bedroom',
      range: '$7 000 – $15 000',
      average: 'в среднем около $10 000 за сделку',
    },
    {
      type: '2 Bedroom',
      range: '$15 000 – $25 000',
      average: 'за одну продажу',
    },
    {
      type: '3 Bedroom',
      range: '$35 000 – $40 000',
      average: 'за одну продажу',
    },
    {
      type: 'Пентхаус',
      range: 'от $50 000',
      average: 'может достигать $70k, $100k и выше',
    },
    {
      type: 'Виллы',
      range: 'от $20 000 – $30 000',
      average: 'могут доходить до сотен тысяч долларов',
    },
  ]

  return (
    <section id="earnings" className="section-padding bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 sm:mb-12 px-4 section-transition ${titleAnimation.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 sm:mb-6 tracking-tight uppercase">
            Сколько вы можете зарабатывать?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Реальные цифры комиссий в Дубае от совместных продаж
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-14 stagger-animation ${cardsAnimation.isVisible ? 'is-visible' : ''}`}
        >
          {earnings.map((item, index) => (
            <div
              key={index}
              className="gradient-border bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 transition-all hover:bg-white/10"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-3 uppercase tracking-tight">{item.type}</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-purple-pink mb-2">{item.range}</div>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{item.average}</p>
            </div>
          ))}
        </div>

        <div 
          ref={prefAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 rounded-3xl p-6 sm:p-8 md:p-12 text-white border border-purple-700/30 shadow-2xl section-transition ${prefAnimation.isVisible ? 'is-visible' : ''}`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-5 sm:mb-8 text-center px-2 tracking-tight uppercase leading-tight">
            Преференции для студентов Академии Брокеров StepDream
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-center text-gray-100 px-2 leading-relaxed max-w-4xl mx-auto">
            Когда вы заходите к нам в Академию — вы не просто учитесь. Вы становитесь частью нашей команды и начинаете зарабатывать уже с первого дня.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold mb-5 sm:mb-6 tracking-tight uppercase gradient-text-purple-pink">Мы работаем вместе:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Даём сделки</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Даём 10 лидов во время обучения</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Обучаем и сопровождаем</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Вместе закрываем продажи</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold mb-5 sm:mb-6 tracking-tight uppercase gradient-text-purple-pink">Итог для каждого студента:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Учитесь профессии</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">С первого дня есть возможность зарабатывать реальные деньги</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Получаете поддержку команды</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Получаете объекты из базы StepDream</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Входите в рынок Дубая с нашим опытом</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center px-2 space-y-3">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Это не теория. Это реальные комиссии, которые получают наши брокеры уже сегодня.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
              Вы сразу начинаете получать реальные комиссии в долларах от совместных сделок
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

