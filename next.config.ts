import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // dev에서 localhost 포트가 바뀌어도 CORS 안 걸리게 same-origin 프록시
  async rewrites() {
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/flower/:path*",
            destination: "https://gonnabe.life/flower/:path*",
          },
        ]
      : [];
  },
};

export default nextConfig;
