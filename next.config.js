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
