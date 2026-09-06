/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath,
}

module.exports = nextConfig
