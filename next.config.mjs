/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
