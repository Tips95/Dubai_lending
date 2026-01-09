'use client'

export default function EarningsSection() {
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
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">
            Сколько вы можете зарабатывать?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Реальные цифры комиссий в Дубае от совместных продаж
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {earnings.map((item, index) => (
            <div
              key={index}
              className="gradient-border bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 transition-all hover:bg-white/10"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mb-2 uppercase tracking-tight">{item.type}</h3>
              <div className="text-xl sm:text-2xl font-bold gradient-text-purple-pink mb-1">{item.range}</div>
              <p className="text-gray-300 text-xs sm:text-sm">{item.average}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 rounded-2xl p-4 sm:p-5 md:p-8 text-white border border-purple-700/30">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4 sm:mb-6 text-center px-2 tracking-tight uppercase">
            Преференции для студентов Академии Брокеров StepDream
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-center opacity-90 px-2">
            Когда вы заходите к нам в Академию — вы не просто учитесь. Вы становитесь частью нашей команды и начинаете зарабатывать уже с первого дня.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6">
              <h4 className="text-xl sm:text-2xl font-heading font-extrabold mb-3 sm:mb-4 tracking-tight uppercase gradient-text-purple-pink">Мы работаем вместе:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold uppercase">Даём сделки</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">Даём 10 лидов во время обучения</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">Обучаем и сопровождаем</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">Вместе закрываем продажи</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6">
              <h4 className="text-xl sm:text-2xl font-heading font-extrabold mb-3 sm:mb-4 tracking-tight uppercase gradient-text-purple-pink">Итог для каждого студента:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold uppercase">Учитесь профессии</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">С первого дня есть возможность зарабатывать реальные деньги</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">Получаете поддержку команды</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">Получаете объекты из базы StepDream</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold uppercase">Входите в рынок Дубая с нашим опытом</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center px-2">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Это не теория. Это реальные комиссии, которые получают наши брокеры уже сегодня.
            </p>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              Вы сразу начинаете получать реальные комиссии в долларах от совместных сделок
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

