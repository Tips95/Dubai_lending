'use client'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">StepDream Academy</h3>
            <p className="text-gray-400">
              Академия брокеров по зарубежной недвижимости. Станьте успешным брокером в Дубае.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-gray-400">
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
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dubai Hills Estate, Park Heights Square 1</li>
              <li>6th Floor – Dubai, UAE</li>
              <li>
                <a href="tel:+971503506009" className="hover:text-purple-400 transition-colors">
                  +971 50 350 60 09
                </a>
              </li>
              <li>
                <a href="mailto:info@stepdream.ae" className="hover:text-purple-400 transition-colors">
                  info@stepdream.ae
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

