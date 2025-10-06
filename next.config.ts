import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/**"),
      new URL("https://dummyjson.com/**"),
      new URL("https://cdn.dummyjson.com/**"),
    ],
  },
};

export default nextConfig;
