/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stream-bucket-wes.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
