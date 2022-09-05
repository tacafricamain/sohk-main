// /** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
