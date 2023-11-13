/** @type {import('next').NextConfig} */

require('dotenv').config({ path: '.env' });

const nextConfig = {
  experimental: {
    fallbackNodePolyfills: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['page.tsx', 'route.ts'],
  // runtime, server, ssr client, public, don't need to recompile app
  // server and getServersideProps pages/components
  publicRuntimeConfig: {},
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
