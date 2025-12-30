/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Не используем standalone режим - он вызывает проблемы на Timeweb Cloud
  // Используем стандартную сборку Next.js
}

module.exports = nextConfig
