/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')([
// '@mui/material',
// '@mui/system',
// '@mui/icons-material',
// ])
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

// module.exports = withTM({
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@mui/styled-engine': '@mui/styled-engine-sc',
//     }
//     return config
//   },
// })
