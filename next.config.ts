import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Static export so the site can be hosted on GitHub Pages.
  output: "export",
};

export default nextConfig;
