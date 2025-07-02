export default function robots() {
    return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://overwatchts.in/sitemap.xml',
  }
}