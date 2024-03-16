import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { withMainLayoutPage } from '@/components/layouts';
import { getBlogList, ContentBlogList } from '@/server/content-parser';
import { DEFAULT_LOCALE } from '@/configs/env';
import BlogPageList, { withLocales } from '@/components/layouts/blog/PageList';

type Props = {
  blogs: ContentBlogList;
  locale: string;
};

export const getStaticProps = async(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const { locale = DEFAULT_LOCALE } = ctx;
  const blogs = await getBlogList(locale);
  return {
    props: {
      blogs,
      locale
    }
  };
};

const BlogIndexPage: NextPage<Props> = (props) => {
  const { blogs, locale } = props;
  const { total, contents } = blogs;
  console.log('=================BlogIndexPage==============');
  console.log({ blogs, locale });
  console.log('====================================');
  return <BlogPageList contents={contents} locale={locale} total={total} />;
  // return (
  //   <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
  //     <div className="text-center">
  //       <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
  //       <p className="mt-3 text-gray-500">
  //         Blogs that are loved by the community. Updated every hour.
  //       </p>
  //     </div>
  //     <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
  //       {posts.map((items, key) => (
  //         <article
  //           className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
  //           key={key}
  //         >
  //           <a href={items.href}>
  //             <img
  //               src={items.img}
  //               loading="lazy"
  //               alt={items.title}
  //               className="w-full h-48 rounded-t-md"
  //             />
  //             <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
  //               <div className="flex-none w-10 h-10 rounded-full">
  //                 <img
  //                   src={items.authorLogo}
  //                   className="w-full h-full rounded-full"
  //                   alt={items.authorName}
  //                 />
  //               </div>
  //               <div className="ml-3">
  //                 <span className="block text-gray-900">
  //                   {items.authorName}
  //                 </span>
  //                 <span className="block text-gray-400 text-sm">
  //                   {items.date}
  //                 </span>
  //               </div>
  //             </div>
  //             <div className="pt-3 ml-4 mr-2 mb-3">
  //               <h3 className="text-xl text-gray-900">{items.title}</h3>
  //               <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
  //             </div>
  //           </a>
  //         </article>
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default withMainLayoutPage(BlogIndexPage, ({ locale }) => {
  return {
    locale,
    meta: {
      title: 'Blog',
      date: '2022-06-01',
      image: '/media/banners/5.jpg',
      keywords: 'gadings writing, technical writing, blog gading, gading blog',
      slug: 'blog',
      tags: ['blog', 'writing', 'technical writing', 'gadings'],
      description: withLocales(locale).desc
    }
  };
});
