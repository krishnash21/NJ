import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images:{
    remotePatterns:[{protocol: "https",hostname:"images.unsplash.com"},
      {protocol:"https",hostname:"wembleypark.com"},
      {protocol:"https",hostname:"d1kgj8r9rzpmlp.cloudfront.net"},
    ],
  },
};

export default nextConfig;
