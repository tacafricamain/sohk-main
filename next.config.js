// /** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  // concurrentFeatures: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '/',
  },
  // distDir: "_next",
  // generateBuildId: async () => {
  //   if (process.env.BUILD_ID) {
  //     return process.env.BUILD_ID;
  //   } else {
  //     return `${new Date().getTime()}`;
  //   }
  // },

}

module.exports = nextConfig
