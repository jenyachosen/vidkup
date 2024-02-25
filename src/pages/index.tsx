import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { Fragment, useMemo, useState } from 'react';
import { CardHero, Button, SVG } from '@/components/base';
import Image from '@/components/base/Image';
import {
  Banner,
  Navbar,
  Footer,
  Content,
  withMainLayoutPage
} from '@/components/layouts';
import BlogCardList from '@/components/layouts/blog/CardList';
import ContentParser from '@/components/base/Content/Parser';
import RedemptionLogo from '$/assets/icons/app/logo.svg';
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

export const getStaticProps = async(
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
  ourClasses: {
    en: 'Our Classes',
    uk: 'Служіння Церкви'
  },
  sportsMinistry: {
    en: 'Sports ministry',
    uk: 'Спортивне служіння'
  },
  ourTeam: {
    en: 'Our team',
    uk: 'Наша команда'
  },
  thansksVisit: {
    en: 'Thanks for visiting us',
    uk: 'Дякую що навідались до нас'
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

const testimonials = [
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Martin escobar',
    title: 'Founder of meta',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    name: 'Angela stian',
    title: 'Product designer',
    quote:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'Karim ahmed',
    title: 'DevOp engineer',
    quote:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.'
  }
];

const btnClasses =
  'text-white text-sm sm:text-base dark:text-white rounded-8 my-4 hover:shadow-lg active:shadow-sm hover:-translate-y-2';

const HomePage: NextPage<Props> = (props) => {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);
  const { contents, blogs, locale } = props;
  const { meta, content } = contents;
  const { color, url, logo } = liveYoutube;
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
        <div className="bg-neutral-50 my-100 py-48 px-6 text-center dark:bg-neutral-900">
          <h1 className="mt-2 mb-16 text-info text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Redemption church
            <br />
            <span className="text-primary flex mt-18">
              We share the Gospel in Transcarpathia
            </span>
          </h1>
          {/* <a
            className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="#!"
            role="button"
          >
            Get started
          </a>
          <a
            className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="#!"
            role="button"
          >
            Learn more
          </a> */}
        </div>
      </Banner>

      <Content>
        <CardHero className="min-h-[0px]">
          {/* <ContentParser className="text-2xl text-center">
            {content}
          </ContentParser> */}
          {/* <section className="py-28">
            <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
              <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                <h1 className="text-sm text-indigo-600 font-medium">
                  Over 200 successful deals
                </h1>
                <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                  We help startups to grow and make money
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae.
                </p>
                <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                  <a
                    href="javascript:void(0)"
                    className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                  >
                    Lets get started
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                  >
                    Get access
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                  className=" md:rounded-tl-[108px]"
                  alt=""
                />
              </div>
            </div>
          </section> */}
          {/* VIDEO SECTION BELOW */}
          <section>
            {
              <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                <div
                  className="absolute inset-0 w-full h-full bg-black/50"
                  onClick={() => setVideoPopUp(false)}
                ></div>
                <div className="px-4 relative">
                  <button
                    className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={() => setVideoPopUp(!isVideoPoppedUp)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 m-auto"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                  <video
                    className="rounded-lg w-full max-w-2xl"
                    controls
                    autoPlay={false}
                  >
                    <source
                      src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            }
          </section>
          <div className="my-32 px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                    The best offer <br />
                    <span className="text-[hsl(218,81%,75%)]">
                      for your business
                    </span>
                  </h1>
                  <a
                    className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Get started
                  </a>
                  <a
                    className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Learn more
                  </a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <Image
                    src="https://tecdn.b-cdn.net/img/new/ecommerce/horizontal/048.jpg"
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center my-20 lg:my-0">
            <Button
              label={`Visit author ${color.split(' ')[0].substring(3)}`}
              disableHover
              key={url}
              href={url}
              delay={300}
              className={`${color} shadow-lg rounded-8 p-12 mx-4 my-4 hover:-translate-y-4 hover:scale-105`}
            >
              <SVG fill="white" size={14} src={logo} />
            </Button>
          </div>
          <div className="flex justify-center items-center flex-wrap text-center my-16">
            <Button
              disableHover
              text={locales.ourClasses}
              href="/classes"
              data-umami-event="homepage_see-blog"
              className={`${btnClasses} bg-primary active:shadow-primary-2 hover:shadow-primary-2`}
            />
            <Button
              disableHover
              text={locales.ourTeam}
              href="/stuff"
              data-umami-event="homepage_see-classes"
              className={`${btnClasses} bg-accent active:shadow-accent-2 hover:shadow-accent-2 mx-8`}
            />
            <Button
              disableHover
              text={locales.sportsMinistry}
              href="/floorball"
              data-umami-event="homepage_see-portfolio"
              className={`${btnClasses} bg-info active:shadow-info-2 hover:shadow-info-2`}
            />
          </div>
          <p className="font-bold text-lg sm:text-xl italic text-center mt-8">
            {locales.thansksVisit}.
          </p>
          <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                {/* <div className="pb-6">
                  <SVG fill="white" size={32} src={RedemptionLogo} />
                </div> */}
                <figure>
                  <blockquote>
                    <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc et est hendrerit, porta nunc vitae, gravida justo.
                      Nunc fermentum magna lorem, euismod volutpat arcu volutpat
                      et.“
                    </p>
                  </blockquote>
                  <div className="mt-6">
                    <img
                      src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                      className="w-16 h-16 mx-auto rounded-full"
                    />
                    <div className="mt-3">
                      <span className="block text-gray-800 font-semibold">
                        Martin escobar
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        Founder of meta
                      </span>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>
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
