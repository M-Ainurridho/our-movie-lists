/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "image.tmdb.org",
            port: "",
         },
         {
            protocol: "https",
            hostname: "api.themoviedb.org",
            port: "",
         },
      ],
   },
};

export default nextConfig;
