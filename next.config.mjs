/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
    remotePatterns: [new URL("https://goodlucksatta.in/**")],
  },
};

export default nextConfig;
