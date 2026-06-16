/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appinventiv.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
