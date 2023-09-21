import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'rayongfruit.nicekun.dev',
  title: 'คิดไม่ออก',
  subtitle: 'เว็บไซต์รวมผลไม้ในเมีองระยอง',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Chanakan at Rayong',
    status: '🌸',
    bio: 'โปรเเกรมเมอร์ที่ไม่รู้อะไรเลยกับเขา.'
  },
  themeColor: '#3D4451'
}
