import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const withPWAWrapped = withPWA({
  dest: "public",
  disable: !isProd,
  register: true,

  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
  },
});

export default withPWAWrapped(nextConfig);