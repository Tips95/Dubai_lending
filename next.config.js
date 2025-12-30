/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Standalone режим для Docker (Timeweb Cloud)
  output: 'standalone',
}

module.exports = nextConfig
