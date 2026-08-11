import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Static export so the site can be hosted on GitHub Pages.
  output: "export",
  // next/image's default optimizer needs a running server, which
  // static export doesn't have — serve images as-is instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
