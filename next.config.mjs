import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
