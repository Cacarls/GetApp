/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**", // Make sure to specify the pathname pattern if needed
      },
    ],
  },
};

module.exports = nextConfig;
