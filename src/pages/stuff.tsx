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

type Props = {
  contents: MDContent;
  locale: string;
};

export const getStaticProps = async(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const { locale = DEFAULT_LOCALE } = ctx;
  const contents = await getContentMultiLanguage('stuff', locale);
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

const team = [
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Martiana dialan',
    title: 'Product designer',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)'
  },
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Micheal colorand',
    title: 'Software engineer',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)'
  },
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Brown Luis',
    title: 'Full stack engineer',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)'
  },
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Lysa sandiago',
    title: 'Head of designers',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)'
  },
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Daniel martin',
    title: 'Product designer',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)'
  },
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Vicky tanson',
    title: 'Product manager',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)'
  }
];

const AboutPage: NextPage<Props> = (props) => {
  const { contents, locale } = props;
  const { meta, content } = contents;
  return (
    <Fragment>
      <Navbar localeChange />
      <Banner
        bgImage="/media/banners/8.jpg"
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
          <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
              <div className="max-w-xl mx-auto">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Meet our team
                </h3>
                <p className="text-gray-600 mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum has been the industrys
                  standard dummy.
                </p>
              </div>
              <div className="mt-12">
                <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {team.map((item, idx) => (
                    <li key={idx}>
                      <div className="w-24 h-24 mx-auto">
                        <Image
                          height={200}
                          src={item.avatar}
                          className="w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="mt-2">
                        <h4 className="text-gray-700 font-semibold sm:text-lg">
                          {item.name}
                        </h4>
                        <p className="text-indigo-600">{item.title}</p>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                          <a href={item.twitter}>
                            <svg
                              className="w-5 h-5 duration-150 hover:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 48 48"
                            >
                              <g clip-path="url(#clip0_17_80)">
                                <path
                                  fill="currentColor"
                                  d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_17_80">
                                  <path fill="currentColor" d="M0 0h48v48H0z" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <a href={item.linkedin}>
                            <svg
                              className="w-5 h-5 duration-150 hover:text-gray-500"
                              fill="none"
                              viewBox="0 0 48 48"
                            >
                              <g clip-path="url(#clip0_17_68)">
                                <path
                                  fill="currentColor"
                                  d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_17_68">
                                  <path fill="currentColor" d="M0 0h48v48H0z" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </CardHero>
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
      title: `Stuff ${AUTHOR_FULLNAME}`,
      slug: 'stuff',
      date: meta.date,
      description: meta.description,
      keywords: meta.keywords,
      tags: meta.tags
    }
  };
});
