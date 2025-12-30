/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Для Timeweb Cloud и других платформ
  output: 'standalone',
  // Убеждаемся что приложение работает на правильном порту
  ...(process.env.PORT ? {} : {}),
}

module.exports = nextConfig 