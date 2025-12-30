/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Standalone режим только для Docker
  // Для Timeweb Cloud используем обычную сборку
  ...(process.env.DOCKER === 'true' ? { output: 'standalone' } : {}),
}

module.exports = nextConfig
