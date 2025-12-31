'use client'

export default function BenefitsSection() {
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
    <section id="benefits" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ключевые преимущества программы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Все необходимое для успешного старта карьеры брокера по зарубежной недвижимости
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10 group"
            >
              <h3 className="text-xl font-bold text-white mb-2 uppercase">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 md:p-8 text-white max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Начните зарабатывать уже с первого дня
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Получите реальные комиссии в долларах от совместных сделок с агентством StepDream
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Записаться на программу
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

