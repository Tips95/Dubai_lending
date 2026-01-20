'use client'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 sm:py-6 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-black pointer-events-none"></div>
      <div className="container-custom relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 sm:mb-4 tracking-tight">StepDream Academy</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Академия брокеров по зарубежной недвижимости. Станьте успешным брокером в Дубае.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <a href="#program" className="hover:text-purple-400 transition-colors">
                  О программе
                </a>
              </li>
              <li>
                <a href="#tariffs" className="hover:text-purple-400 transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-purple-400 transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#earnings" className="hover:text-purple-400 transition-colors">
                  Заработок
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>Dubai Hills Estate, Park Heights Square 1</li>
              <li>6th Floor – Dubai, UAE</li>
              <li>
                <a href="tel:+971552836575" className="hover:text-purple-400 transition-colors break-all">
                  +971 55 283 6575
                </a>
              </li>
              <li>
                <a href="mailto:academystepdream@gmail.com" className="hover:text-purple-400 transition-colors break-all">
                  academystepdream@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} StepDream Academy. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

