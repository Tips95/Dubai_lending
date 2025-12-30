/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Standalone режим только для production Docker
  ...(process.env.NODE_ENV === 'production' && process.env.DOCKER === 'true' ? { output: 'standalone' } : {}),
}

module.exports = nextConfig 