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
    <section id="earnings" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Сколько вы можете зарабатывать
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Реальные цифры комиссий в Дубае от совместных продаж
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {earnings.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-2 uppercase">{item.type}</h3>
              <div className="text-2xl font-bold gradient-text-purple-pink mb-1">{item.range}</div>
              <p className="text-gray-300 text-sm">{item.average}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 md:p-8 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Преференции для студентов Академии Брокеров StepDream
          </h3>
          <p className="text-xl mb-8 text-center opacity-90">
            Когда вы заходите к нам в Академию — вы не просто учитесь. Вы становитесь частью нашей команды и начинаете зарабатывать уже с первого дня.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4">Мы работаем вместе:</h4>
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

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4">Итог для каждого студента:</h4>
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

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-2">
              Это не теория. Это реальные комиссии, которые получают наши брокеры уже сегодня.
            </p>
            <p className="text-lg opacity-90">
              Вы сразу начинаете получать реальные комиссии в долларах от совместных сделок
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

