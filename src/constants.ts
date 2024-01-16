import IconYoutube from '$/assets/icons/logo/youtube.svg';
import IconInstagram from '$/assets/icons/logo/instagram.svg';
import {
  // AUTHOR_NAME,
  // AUTHOR_GITHUB,
  // BASE_URL,
  // SITE_NAME,
  AUTHOR_YOUTUBE,
  AUTHOR_INSTAGRAM
} from '@/configs/env';

export const liveYoutube = {
  color: 'bg-instagram dark:hover:shadow-instagram',
  logo: IconYoutube,
  url: `https://www.youtube.com/${AUTHOR_YOUTUBE}/streams`
};

export const socialLinks = [
  // {
  //   color: 'bg-github dark:hover:shadow-light',
  //   logo: IconGithub,
  //   url: `https://github.com/${AUTHOR_GITHUB}`
  // },
  // {
  //   color: 'bg-linkedin dark:hover:shadow-linkedin',
  //   logo: IconLinkedin,
  //   url: `https://linkedin.com/in/${AUTHOR_LINKEDIN}`
  // },
  {
    color: 'bg-instagram dark:hover:shadow-instagram',
    logo: IconInstagram,
    url: `https://instagram.com/${AUTHOR_INSTAGRAM}`
  },
  // {
  //   color: 'bg-facebook dark:hover:shadow-facebook',
  //   logo: IconFacebook,
  //   url: `https://facebook.com/${AUTHOR_FACEBOOK}`
  // },
  // {
  //   color: 'bg-twitter dark:hover:shadow-twitter',
  //   logo: IconTwitter,
  //   url: `https://twitter.com/${AUTHOR_TWITTER}`
  // },
  {
    color: 'bg-instagram dark:hover:shadow-instagram',
    logo: IconYoutube,
    url: `https://www.youtube.com/${AUTHOR_YOUTUBE}`
  }
];
