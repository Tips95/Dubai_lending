/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Для статического экспорта
  },
  // Статический экспорт для Timeweb Cloud (они ожидают index.html)
  output: 'export',
  // Отключаем trailing slash для совместимости
  trailingSlash: false,
}

module.exports = nextConfig
