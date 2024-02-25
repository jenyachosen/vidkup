/* eslint-disable @typescript-eslint/no-var-requires */
const headers = require('./headers.config');
const webpack = require('./webpack.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers,
  webpack,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
  ignoreDuringBuilds: true,
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk'
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'res.cloudinary.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com'
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net'
      }
    ],
    minimumCacheTTL: 60 * 60 * 24
  }
};

module.exports = nextConfig;
