/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me", "cdn-site.gojek.com", "assets.nintendo.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/**", // penting: sesuaikan path
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
