import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 상류 컴포넌트가 예시 데이터로 쓰는 원격 이미지 호스트.
    // 소스를 고쳐 로컬 파일로 바꾸면 원본과 달라지므로 이쪽을 연다.
    // (card-stack, carousel-cards, profile-dropdown)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "www.transparenttextures.com" },
    ],
  },
};

export default nextConfig;
