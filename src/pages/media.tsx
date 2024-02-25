import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import dynamic from 'next/dynamic';
import { Fragment, Suspense } from 'react';
import { CardHero, Image, Button, SVG } from '@/components/base';
import {
  Banner,
  Content,
  Navbar,
  Footer,
  withMainLayoutPage
} from '@/components/layouts';
import ContentParser from '@/components/base/Content/Parser';
import {
  AUTHOR_FULLNAME,
  AUTHOR_NAME,
  BASE_URL,
  DEFAULT_LOCALE
} from '@/configs/env';
import { getContentMultiLanguage, MDContent } from '@/server/content-parser';

import IconMail from '$/assets/icons/tools/mail.svg';
import IconBriefcase from '$/assets/icons/tools/briefcase.svg';
// import imgProfile from '$/assets/images/authors/gading-talks.jpeg';
import imgProfile from '$/media/banners/1.jpg';

type Props = {
  contents: MDContent;
  locale: string;
};

export const getStaticProps = async(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const { locale = DEFAULT_LOCALE } = ctx;
  const contents = await getContentMultiLanguage('classes', locale);
  return {
    props: {
      contents,
      locale
    }
  };
};

const LeftDesc = ({ className = 'hidden md:flex' }) => (
  <div
    className={`${className} items-center h-[30px] flex-1 justify-center text-center`}
  >
    <div className="group hover:util--text-shadow dark:hover:util--text-shadow-white">
      <div className="transition-transform duration-200 hover:cursor-pointer group-hover:-translate-y-4">
        👨🏻‍💻
      </div>
      <p className="text-light-20 dark:text-light-20">Writer,</p>
    </div>
    <div className="group hover:util--text-shadow dark:hover:util--text-shadow-white mx-24">
      <div className="transition-transform duration-200 hover:cursor-pointer group-hover:-translate-y-4">
        🧐
      </div>
      <p className="text-light-20 dark:text-light-20">Explorer,</p>
    </div>
    <div className="group hover:util--text-shadow dark:hover:util--text-shadow-white">
      <div className="transition-transform duration-200 hover:cursor-pointer group-hover:-translate-y-4">
        😴
      </div>
      <p className="text-light-20 dark:text-light-20">Slacker</p>
    </div>
  </div>
);

const rightDescBtnClasses =
  'flex items-center text-sm rounded-4 px-8 py-4 text-white dark:text-white mx-8 hover:no-underline hover:-translate-y-2 hover:shadow-lg active:shadow-sm';
const RightDesc = ({ className = 'hidden md:flex' }) => (
  <div className={`${className} items-center h-[30px] flex-1 justify-center`}>
    <Button
      disableHover
      href="mailto:contact@vidkup.com"
      data-umami-event="about_contact"
      className={`${rightDescBtnClasses} bg-primary active:shadow-primary-2 hover:shadow-primary-2`}
    >
      <SVG size={16} className="mr-4" fill="white" src={IconMail} /> Contact
    </Button>
    <Button
      disableHover
      href={`${BASE_URL}/resume`}
      data-umami-event="about_resume"
      className={`${rightDescBtnClasses} bg-info active:shadow-info-2 hover:shadow-info-2`}
    >
      <SVG size={14} className="mr-4" fill="white" src={IconBriefcase} /> Resume
    </Button>
  </div>
);

const Disqus = dynamic(() => import('@/components/base/Content/Disqus'), {
  suspense: true,
  ssr: false
});

const AboutPage: NextPage<Props> = (props) => {
  const { contents, locale } = props;
  const { meta, content } = contents;

  const team = [
    {
      avatar:
        'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
      name: 'Martiana dialan',
      title: 'Product designer'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
      name: 'Micheal colorand',
      title: 'Software engineer'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Brown Luis',
      title: 'Full stack engineer'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Lysa sandiago',
      title: 'Head of designers'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Daniel martin',
      title: 'Product designer'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      name: 'Vicky tanson',
      title: 'Product manager'
    }
  ];

  return (
    <Fragment>
      <Navbar localeChange />
      <Banner
        bgImage="/media/banners/b2.jpg"
        className="font-courgette text-white util--text-shadow text-center"
      >
        <div className="container -mt-48">
          <h1 className="font-bold text-4xl mb-8 text-white dark:text-white animate-[scale_.25s_ease-in-out]">
            {AUTHOR_NAME}
          </h1>
          <p className="opacity-0 text-lg px-8 text-white dark:text-white animate-[y-b-25_.3s_ease-in-out_.2s_1_normal_forwards]">
            {meta.description}”
          </p>
        </div>
      </Banner>
      <Content>
        <CardHero>
          <section className="py-4">
            <div className="max-w-screen-xl mx-auto px-0 md:px-8">
              <div className="max-w-xl mx-auto sm:text-center">
                <h3 className="text-gray-800 mb-12 text-3xl font-semibold sm:text-4xl">
                  Classes
                </h3>
                <p className="text-gray-600 mb-28 mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown.
                </p>
              </div>
              <div className="mt-12">
                <ul className="grid gap-20 sm:grid-cols-2 md:grid-cols-3">
                  {team.map((item, idx) => (
                    <li key={idx} className="mb-24">
                      <div className="w-full h-60 mb-12 sm:h-52 md:h-56">
                        <Image
                          src={item.avatar}
                          className="w-full h-full object-cover object-center shadow-md rounded-xl rounded-12"
                          alt=""
                          height={260}
                          width="100%"
                        />
                      </div>
                      <div className="mt-4">
                        <h4 className="text-lg text-gray-700 font-semibold">
                          {item.name}
                        </h4>
                        <p className="text-indigo-600">{item.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </CardHero>
        {/* <Suspense
          fallback={
            <div className="container max-w-5xl mt-40 mx-auto">
              <h4 className="text-center mb-12">Loading Disqus...</h4>
            </div>
          }
        >
          <Disqus
            path="classes"
            identifier="classes"
            title={meta.title}
            locale={locale}
          />
        </Suspense> */}
      </Content>
      <Footer />
    </Fragment>
  );
};

export default withMainLayoutPage(AboutPage, ({ contents, locale }) => {
  const { meta } = contents;
  return {
    locale,
    meta: {
      title: `Classes ${AUTHOR_FULLNAME}`,
      slug: 'classes',
      date: meta.date,
      description: meta.description,
      keywords: meta.keywords,
      tags: meta.tags
    }
  };
});
