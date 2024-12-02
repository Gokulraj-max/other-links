import { DevtoIcon } from '@/components/icons/devto'
import { DiscordIcon } from '@/components/icons/discord'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { NextJSArgIcon } from '@/components/icons/nextjsargentina'
import { ResumeIcon } from '@/components/icons/resume'
import { TelegramIcon } from '@/components/icons/telegram'
import { WebIcon } from '@/components/icons/web'
import { WhatsappIcon } from '@/components/icons/whatsapp'
import { XIcon } from '@/components/icons/x'

export const SOCIAL_DATA = {
  name: 'Govinth',
  initials: 'GR',
  avatar: './assets/avatar.webp',
  about: `Aspiring Full-Stack Developer | Design and Innovation Enthusiast`,
  contacts: [
    {
      title: 'Portfolio',
      url: '',
      icon: WebIcon
    },
    {
      title: 'Resume',
      url: '',
      icon: ResumeIcon
    },
    {
      title: 'Email',
      url: 'mailto:grajbits@gmail.com',
      icon: MailIcon
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+918531041822',
      icon: WhatsappIcon
    }
  ],
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/Gokulraj-max',
      icon: GithubIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gokul-raj-089682249/',
      icon: LinkedinIcon
    },
    {
      title: 'The everything app',
      url: 'https://x.com/grajbits',
      icon: XIcon
    },
   /* {
      title: 'Dev Community',
      url: 'https://dev.to/emapeire',
      icon: DevtoIcon
    },*/
    {
      title: 'Telegram',
      url: 'https://t.me/Gokulraj787',
      icon: TelegramIcon
    }
  ],
  communities: [
    /*{
      title: 'Next.js Argentina',
      url: 'https://dub.sh/nextjsargentina',
      icon: NextJSArgIcon
    },
    {
      title: 'Discord Community',
      url: 'https://dub.sh/dsnextjsarg',
      icon: DiscordIcon
    }*/
  ]
}