// /** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  // concurrentFeatures: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
      },
  ],
    formats: ["image/webp"],
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
