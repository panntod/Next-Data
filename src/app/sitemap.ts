import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const conventionalRoutes: MetadataRoute.Sitemap = ['/about', '/why', '/services', '/faq'].map(route => ({
    url: `${process.env.APP_URL ?? 'https://next.pandhuarya.my.id'}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly'
  }))

  return [
    {
      url: `${process.env.APP_URL ?? 'https://next.pandhuarya.my.id'}/`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'never'
    },
    ...conventionalRoutes
  ]
}

export const revalidate = 7200
