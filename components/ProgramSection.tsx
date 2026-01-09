'use client'

export default function ProgramSection() {
  const benefits = [
    {
      title: 'VIP онлайн курс',
      description: 'Доступ на год стоимостью 180 000 ₽ (бонус)',
    },
    {
      title: 'Закрытый клуб',
      description: 'Доступ на 6 месяцев "Успешный брокер" за 180 000 ₽ (бонус)',
    },
    {
      title: 'Поездка в Дубай',
      description: 'Проживание, трансфер в Дубае включены. Билеты оплачиваете вы',
    },
    {
      title: 'Личное наставничество',
      description: 'От Беслана Терекбаева в течение 6 месяцев',
    },
    {
      title: 'Знакомство с районами',
      description: 'Инвестиционно привлекательные районы Дубая',
    },
    {
      title: 'Топ-менеджеры застройщиков',
      description: 'EMAAR, Binghatti, IMTIAZ, Ellington, ORO24, DAMAC',
    },
    {
      title: 'Тренинги по продажам',
      description: 'От топ-специалистов индустрии',
    },
    {
      title: 'SMM тренинги',
      description: 'Продвижение в социальных сетях',
    },
    {
      title: 'Съемка и монтаж',
      description: 'Тренинги по съемке и монтажу на телефон',
    },
    {
      title: 'Ораторское искусство',
      description: 'Развитие навыков публичных выступлений',
    },
    {
      title: 'Профессиональный контент',
      description: 'Фото и видео для личного бренда на год',
    },
    {
      title: 'Съемка подкаста',
      description: 'Материал для десятков рилсов',
    },
    {
      title: 'Персональный сайт',
      description: 'Создание вашего личного сайта',
    },
    {
      title: 'Платформа поиска',
      description: 'Доступ к платформе по поиску недвижимости (6 месяцев)',
    },
    {
      title: 'Экскурсии и сафари',
      description: 'Поездки по городу и сафари-тур в пустыню',
    },
    {
      title: '10 лидов',
      description: 'От агентства недвижимости StepDream во время тура',
    },
    {
      title: 'Путешествие по заливу',
      description: 'Двухчасовое на корабле со шведским столом и шоу-программой',
    },
    {
      title: 'Сертификат',
      description: 'Официальный сертификат о прохождении обучения',
    },
  ]

  return (
    <section id="program" className="section-padding bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-purple-900/20 to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-3 sm:mb-4 tracking-tight uppercase">
            Что вы получаете за эти деньги
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Полный комплекс услуг для старта успешной карьеры брокера по зарубежной недвижимости
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mb-2 uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 rounded-2xl p-4 sm:p-5 md:p-8 text-white text-center px-4 border border-purple-700/30">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold mb-3 sm:mb-4 tracking-tight">
            Введение в профессию «Брокер по зарубежной недвижимости»
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
            Начни зарабатывать уже с первого дня обучения
          </p>
        </div>
      </div>
    </section>
  )
}

