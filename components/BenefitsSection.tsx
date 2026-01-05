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
    <section id="benefits" className="section-padding bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Ключевые преимущества программы
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Все необходимое для успешного старта карьеры брокера по зарубежной недвижимости
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10 group"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mb-2 uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center px-4">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 sm:p-5 md:p-8 text-white max-w-4xl w-full">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-3 sm:mb-4 tracking-tight">
              Начните зарабатывать уже с первого дня
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
              Получите реальные комиссии в долларах от совместных сделок с агентством StepDream
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Записаться на программу
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

