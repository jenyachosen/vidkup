import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { CardHero } from '@/components/base';
import {
  Banner,
  Content,
  Footer,
  Navbar,
  withMainLayoutPage
} from '@/components/layouts';
import ContentParser from '@/components/base/Content/Parser';
import { MDContent, getContentMultiLanguage } from '@/server/content-parser';
import { Fragment, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { DEFAULT_LOCALE } from '@/configs/env';

type Props = {
  contents: MDContent;
  locale: string;
};

export const getStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const { locale = DEFAULT_LOCALE } = ctx;
  const contents = await getContentMultiLanguage('floorball', locale);
  return {
    props: {
      contents,
      locale
    }
  };
};

// const servicesItems = [
//   'Mobile development',
//   'UI/UX Design',
//   'web development',
//   'SEO'
// ];

// const Disqus = dynamic(() => import('@/components/base/Content/Disqus'), {
//   suspense: true,
//   ssr: false
// });

const NowPage: NextPage<Props> = (props) => {
  const { contents, locale } = props;
  const { meta, content } = contents;
  return (
    <Fragment>
      <Navbar localeChange />
      <Banner
        bgImage={meta.image}
        className="font-courgette text-white util--text-shadow text-center"
      >
        <div className="container -mt-48">
          <h1 className="font-bold text-4xl mb-8 text-white dark:text-white animate-[scale_.25s_ease-in-out]">
            {meta.title}
          </h1>
          <p className="text-lg px-8 text-white dark:text-white opacity-0 animate-[y-b-25_.3s_ease-in-out_.2s_1_normal_forwards]">
            {meta.description}”
          </p>
        </div>
      </Banner>
      <Content>
        <CardHero>
          <main className="relative py-28 bg-gray-900">
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
              <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                <h3 className="text-cyan-400 font-semibold">Contact</h3>
                <p className="text-white text-3xl font-semibold sm:text-4xl">
                  Get in touch
                </p>
                <p className="text-gray-300">
                  We’d love to hear from you! Please fill out the form bellow.
                </p>
              </div>
              <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="font-medium">Full name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Phone number</label>
                    <div className="relative mt-2">
                      <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                        <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                          <option>US</option>
                          <option>ES</option>
                          <option>MR</option>
                        </select>
                      </div>
                      <input
                        type="number"
                        placeholder="+1 (555) 000-000"
                        required
                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Message</label>
                    <textarea
                      required
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div
              className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
              style={{
                background:
                  'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)'
              }}
            ></div>
          </main>
        </CardHero>
        {/* <Suspense
          fallback={
            <div className="container max-w-5xl mt-40 mx-auto">
              <h4 className="text-center mb-12">Loading Disqus...</h4>
            </div>
          }
        > */}
        {/* <Disqus
          path="floorball"
          identifier="floorball"
          title={meta.title}
          locale={locale}
        /> */}
        {/* </Suspense> */}
      </Content>
      <Footer />
    </Fragment>
  );
};

export default withMainLayoutPage(NowPage, ({ contents, locale }) => {
  return {
    locale,
    meta: {
      ...contents.meta,
      slug: 'floorball'
    }
  };
});
