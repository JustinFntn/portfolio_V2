import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/97749804',
      },
      {
        protocol: 'https',
        hostname: 'www.iut-littoral.fr',
        port: '',
        pathname: '/wp-content/uploads/2021/12/iutlittoral-logo.jpg',
      },
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com',
        port: '',
      }
    ],
    unoptimized: true,
  },
  output: "export",
  basePath: "/portfolio_V2",
  assetPrefix: "/portfolio_V2/",
};

export default nextConfig;
