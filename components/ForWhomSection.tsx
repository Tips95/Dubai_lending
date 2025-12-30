'use client'

export default function ForWhomSection() {
  const targetAudience = [
    {
      title: 'Амбициозные люди',
      description: 'Которые хотят постоянно развиваться в этой денежной нише и готовых зарабатывать более 10 000$ в месяц в Дубае',
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Брокеры по недвижимости',
      description: 'Ищущие партнера в Дубае и готовых передавать клиентов удаленно',
      icon: '🤝',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Инвесторы',
      description: 'Для тех, кто задумывается о покупке квартиры в Дубае для жизни или инвестиций',
      icon: '💎',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Предприниматели',
      description: 'Мечтающие войти в деловое сообщество Дубая и создать свой бизнес в ОАЭ',
      icon: '💼',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="for-whom" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Для кого этот брокер-тур?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Программа подходит для разных категорий людей, стремящихся к успеху в недвижимости
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {targetAudience.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg opacity-90 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

