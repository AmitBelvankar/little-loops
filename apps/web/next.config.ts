import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@little-loops/sanity-schema"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
