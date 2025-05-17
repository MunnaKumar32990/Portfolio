import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    disableStaticImages: false,
  },
  reactStrictMode: true,
  devIndicators: false
};

export default nextConfig;
