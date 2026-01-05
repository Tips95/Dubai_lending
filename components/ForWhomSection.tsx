'use client'

export default function ForWhomSection() {
  const targetAudience = [
    {
      title: 'Амбициозные люди',
      description: 'Которые хотят постоянно развиваться в этой денежной нише и готовых зарабатывать более 10 000$ в месяц в Дубае',
      gradient: 'from-purple-800/90 to-purple-700/90',
    },
    {
      title: 'Брокеры по недвижимости',
      description: 'Ищущие партнера в Дубае и готовых передавать клиентов удаленно',
      gradient: 'from-purple-800/90 to-purple-700/90',
    },
    {
      title: 'Инвесторы',
      description: 'Для тех, кто задумывается о покупке квартиры в Дубае для жизни или инвестиций',
      gradient: 'from-purple-800/90 to-purple-700/90',
    },
    {
      title: 'Предприниматели',
      description: 'Мечтающие войти в деловое сообщество Дубая и создать свой бизнес в ОАЭ',
      gradient: 'from-purple-800/90 to-purple-700/90',
    },
  ]

  return (
    <section id="for-whom" className="section-padding bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">
            Для кого этот брокер-тур?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Программа подходит для разных категорий людей, стремящихся к успеху в недвижимости
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {targetAudience.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-5 sm:p-6 md:p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl border border-purple-600/30`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold mb-3 sm:mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

