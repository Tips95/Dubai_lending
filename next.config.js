/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Для Docker standalone режим
  output: 'standalone',
}

module.exports = nextConfig 