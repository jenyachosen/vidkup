import { useMemo, type FunctionComponent } from 'react';
import { Link, Button, SVG } from '@/components/base';
import {
  AUTHOR_NAME,
  AUTHOR_GITHUB,
  BASE_URL,
  SITE_NAME
  // AUTHOR_YOUTUBE
} from '@/configs/env';
import clsxm from '@/utils/helpers/clsxm';
import styles from './styles.module.css';
import { socialLinks } from '@/constants';
import createContentLocales from '@/utils/helpers/locales';

export interface Props {
  className?: string;
  locale?: string;
}

const withLocales = createContentLocales({
  social: {
    en: "Let's get in touch on our social",
    uk: 'Ми в соц мережах'
  }
});

const Footer: FunctionComponent<Props> = (props) => {
  const { className, locale } = props;
  const locales = useMemo(() => withLocales(locale), [locale]);
  console.log('===============Footer=============');
  console.log({ locale, locales, socialLinks });
  console.log('====================================');
  return (
    <footer className={clsxm('w-full h-full', className, styles.footer)}>
      <div className="flex container mx-auto my-64 flex-col justify-between lg:items-center lg:max-w-5xl lg:flex-row">
        <p className="text-2xl text-left mx-4">{locales?.social || ''}</p>
        <div className="flex flex-wrap items-center my-20 lg:my-0">
          {socialLinks.map((socialLink) => {
            const { color, url, logo } = socialLink;

            return (
              <Button
                label={`Visit author ${color.split(' ')[0].substring(3)}`}
                disableHover
                key={url}
                href={url}
                delay={300}
                className={`bg-instagram dark:hover:shadow-instagram shadow-lg rounded-8 p-12 mx-4 my-4 hover:-translate-y-4 hover:scale-105`}
              >
                <SVG fill="white" size={14} src={logo} />
              </Button>
            );
          })}
        </div>
      </div>
      <hr className="container lg:max-w-5xl" />
      <div className="container w-full mx-auto my-48 text-sm text-center lg:max-w-5xl sm:text-left">
        <span className="inline-block">
          &copy;&nbsp;{new Date().getFullYear()}&nbsp;
        </span>
        <Link className="inline-block" href={BASE_URL}>
          {SITE_NAME}
        </Link>
        <span className="inline-block mx-4">&bull;</span>
        <Link
          className="inline-block mx-2"
          href={`https://github.com/${AUTHOR_GITHUB}`}
        >
          Built
        </Link>
        <span className="inline-block mx-2">with</span>
        <span className="inline-block util--underline-dotted mx-2">
          praying
        </span>
        <span className="inline-block mx-2">by</span>
        <Link
          className="inline-block text-primary mx-2"
          href={`https://github.com/${AUTHOR_GITHUB}`}
        >
          {AUTHOR_NAME}
        </Link>
        <div className="dark:text-white mt-8">
          <span className="inline-block mx-4">&bull;</span>
          <Link className="inline-block text-primary" href="/docs/colors">
            Colors System
          </Link>
          <span className="inline-block mx-4">&bull;</span>
          <Link
            className="inline-block text-primary"
            href={`${BASE_URL}/rss/feed.xml`}
          >
            Feed RSS
          </Link>
          <span className="inline-block mx-4">&bull;</span>
          <Link
            className="inline-block text-primary"
            href={`${BASE_URL}/sitemap.xml`}
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  className: ''
};

export default Footer;
