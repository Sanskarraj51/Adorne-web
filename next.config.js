
const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
}
