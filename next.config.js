/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-sanity', 'sanity'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
