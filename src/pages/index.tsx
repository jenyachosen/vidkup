import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { Fragment, useMemo } from 'react';
import { CardHero, Button, SVG } from '@/components/base';
import {
  Banner,
  Navbar,
  Footer,
  Content,
  withMainLayoutPage
} from '@/components/layouts';
import BlogCardList from '@/components/layouts/blog/CardList';
import ContentParser from '@/components/base/Content/Parser';
import { DEFAULT_LOCALE } from '@/configs/env';
import {
  ContentMeta,
  getBlogList,
  getContentMultiLanguage,
  MDContent
} from '@/server/content-parser';
import generateRSSFeed from '@/server/feed-rss';
import createContentLocales from '@/utils/helpers/locales';
import { liveYoutube } from '@/constants';

type Props = {
  contents: MDContent;
  blogs: ContentMeta[];
  locale: string;
};

export const getStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const { locale = DEFAULT_LOCALE } = ctx;
  const [contents, { contents: blogs }] = await Promise.all([
    getContentMultiLanguage('home', locale),
    getBlogList(locale, { limit: 4 }),
    generateRSSFeed()
  ]);
  return {
    props: {
      contents,
      blogs,
      locale
    }
  };
};

const withLocales = createContentLocales({
  myBlog: {
    en: 'Read my blog',
    uk: 'Читати мій блог'
  },
  myPortfolio: {
    en: 'See my portfolio',
    uk: 'Подивитись портфоліо'
  },
  aboutMe: {
    en: 'Learn more about me',
    uk: 'Дізнатись більше про мене'
  },
  thansksVisit: {
    en: 'Thanks for visiting me',
    uk: 'Дякую що навідались до моєї сторінки'
  },
  recentPosts: {
    en: 'Recent posts',
    uk: 'Недавні пости'
  },
  seeMore: {
    en: 'See more posts',
    uk: 'Подивитись більше постів'
  }
});

const btnClasses =
  'text-white text-sm sm:text-base dark:text-white rounded-8 my-4 hover:shadow-lg active:shadow-sm hover:-translate-y-2';

const HomePage: NextPage<Props> = (props) => {
  const { contents, blogs, locale } = props;
  const { meta, content } = contents;
  const locales = useMemo(() => withLocales(locale), [locale]);
  // console.log('================Home==============');
  // console.log({ meta, content, locales, locale });
  // console.log('====================================');
  // debugger;
  return (
    <Fragment>
      <Navbar localeChange />
      <Banner
        bgImage="/media/banners/b1.jpg"
        className="font-courgette text-white util--text-shadow text-center"
      >
        <div className="container -mt-48">
          <h1 className="font-bold text-4xl mb-8 text-white dark:text-white animate-[scale_.25s_ease-in-out]">
            {meta.title}
          </h1>
          <p className="text-2xl px-8 text-white dark:text-white opacity-0 animate-[y-b-25_.3s_ease-in-out_.2s_1_normal_forwards]">
            {meta.description}”
          </p>
        </div>
      </Banner>
      <Content>
        <CardHero className="min-h-[0px]">
          <ContentParser className="text-2xl text-center">
            {content}
          </ContentParser>
          <div className="flex flex-wrap justify-center items-center my-20 lg:my-0">
            <Button
              label={`Visit author ${liveYoutube.color
                .split(' ')[0]
                .substring(3)}`}
              disableHover
              key={liveYoutube.url}
              href={liveYoutube.url}
              delay={300}
              className={`${liveYoutube.color} shadow-lg rounded-8 p-12 mx-4 my-4 hover:-translate-y-4 hover:scale-105`}
            >
              <SVG fill="white" size={14} src={liveYoutube.logo} />
            </Button>
          </div>
          <div className="flex justify-center items-center flex-wrap text-center my-16">
            <Button
              disableHover
              text={locales.myBlog}
              href="/blog"
              data-umami-event="homepage_see-blog"
              className={`${btnClasses} bg-primary active:shadow-primary-2 hover:shadow-primary-2`}
            />
            <Button
              disableHover
              text={locales.aboutMe}
              href="/classes"
              data-umami-event="homepage_see-classes"
              className={`${btnClasses} bg-accent active:shadow-accent-2 hover:shadow-accent-2 mx-8`}
            />
            <Button
              disableHover
              text={locales.myPortfolio}
              href="/portfolio"
              data-umami-event="homepage_see-portfolio"
              className={`${btnClasses} bg-info active:shadow-info-2 hover:shadow-info-2`}
            />
          </div>
          <p className="font-bold text-lg sm:text-xl italic text-center mt-8">
            {locales.thansksVisit}.
          </p>
        </CardHero>
        <div className="flex justify-center items-center flex-col my-40 opacity-0 animate-[y-b-25_.5s_ease-in-out_.75s_1_normal_forwards]">
          <h3 className="font-courgette">{locales.recentPosts}</h3>
          <hr className="w-full mt-16" />
          <BlogCardList contents={blogs} locale={locale} />
          <Button
            href="/blog"
            data-umami-event="homepage_more-posts"
            className="text-white dark:text-white mt-36 bg-primary rounded-8"
          >
            {locales.seeMore}...
          </Button>
        </div>
      </Content>
      <Footer locale={locale} />
    </Fragment>
  );
};

export default withMainLayoutPage(HomePage, (props) => {
  const { contents, locale } = props;
  const { meta } = contents;
  return {
    locale,
    meta: {
      title: 'We are believers to Jesus',
      slug: '',
      date: meta.date,
      description: meta.description,
      keywords: meta.keywords,
      tags: meta.tags
    }
  };
});
