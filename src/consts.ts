import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'holywater\'s blog',
  locale: 'en-US',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://astro-erudite.vercel.app',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/nazeef-hasan-khan/',
    label: 'LinkedIn',
  },
  {
    href: 'https://discordapp.com/users/593390384785391637',
    label: 'Discord',
  },
  {
    href: 'https://github.com/Nzf07',
    label: 'GitHub',
  },
  {
    href: 'mailto:h0lywat3rr@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:x',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Discord: 'simple-icons:discord',
}
