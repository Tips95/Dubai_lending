/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Для статического экспорта
  },
  // Статический экспорт отключен для dev режима
  // Включите его только для production build: output: 'export'
  // output: 'export', // Раскомментируйте для статического экспорта
  // Отключаем trailing slash для совместимости
  trailingSlash: false,
}

module.exports = nextConfig
