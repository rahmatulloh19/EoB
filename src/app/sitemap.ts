import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const paths = ['/', '/menu'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  paths.forEach((path) => {
    routing.locales.forEach((locale) => {
      const prefix = `/${locale}`;
      const route = path === '/' ? '' : path;
      const url = `${baseUrl}${prefix}${route}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: path === '/' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
