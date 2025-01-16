import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${process.env.APP_URL ?? 'https://next.pandhuarya.my.id'}/sitemap.xml`
  }
}
