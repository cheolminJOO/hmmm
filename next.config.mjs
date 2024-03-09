/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'antd',
    '@ant-design',
    'react-daum-postcode',
    'react-hook-form',
    'sweetalert2',
  ],
};

export default nextConfig;
