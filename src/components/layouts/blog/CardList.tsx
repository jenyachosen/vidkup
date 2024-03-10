import type { FunctionComponent } from 'react';
import type { ContentMeta } from '@/server/content-parser';
import NextLink from 'next/link';
import {
  LazyComponentProps,
  ScrollPosition,
  trackWindowScroll
} from 'react-lazy-load-image-component';
import Card from '@/components/base/Card';
import Image from '@/components/base/Image';
import ContentInfo from '@/components/base/Content/Info';
import Link from '@/components/base/Link';
import clsxm from '@/utils/helpers/clsxm';

interface CardProps {
  meta: ContentMeta;
  locale: string;
  scrollPosition?: ScrollPosition;
}

interface Props extends LazyComponentProps {
  className?: string;
  contents: ContentMeta[];
  locale: string;
}

const posts = [
  {
    title: 'What is SaaS? Software as a Service Explained',
    description:
      'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some',
    image:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    authorLogo: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    authorName: 'Sidi dev',
    date: 'Jan 4 2022',
    href: 'javascript:void(0)'
  },
  {
    title: 'A Quick Guide to WordPress Hosting',
    description:
      "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
    image:
      'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    authorLogo: 'https://api.uifaces.co/our-content/donated/FJkauyEa.jpg',
    authorName: 'Micheal',
    date: 'Jan 4 2022',
    href: 'javascript:void(0)'
  },
  {
    title: '7 Promising VS Code Extensions Introduced in 2022',
    description:
      "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    authorLogo: 'https://randomuser.me/api/portraits/men/46.jpg',
    authorName: 'Luis',
    date: 'Jan 4 2022',
    href: 'javascript:void(0)'
  },
  {
    title: 'How to Use Root C++ Interpreter Shell to Write C++ Programs',
    description:
      "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
    image:
      'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    authorLogo: 'https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg',
    authorName: 'Lourin',
    date: 'Jan 4 2022',
    href: 'javascript:void(0)'
  }
];

export const BlogCard: FunctionComponent<CardProps> = (props) => {
  const { meta, locale, scrollPosition } = props;
  return (
    <Card
      hoverEffect
      key={meta.slugOriginal}
      className="rounded-12 overflow-hidden"
    >
      <NextLink
        aria-label={`Read ${meta.title}`}
        href="/blog/[slug]"
        as={`/blog/${meta.slugOriginal}`}
      >
        <div className="relative w-full overflow-hidden h-[200px] cursor-pointer">
          <Image
            src={meta.image}
            alt={meta.title}
            className="object-cover w-full"
            wrapperClassName="w-full"
            width="100%"
            height={200}
            scaling={0.45}
            delayLoad={300}
            scrollPosition={scrollPosition}
          />
        </div>
      </NextLink>
      <div className="flex flex-col pt-12 pb-16 px-16">
        <div className="flex flex-col justify-between items-center min-h-[50px]">
          <div className="w-full text-center">
            <Link
              href="/blog/[slug]"
              asPath={`/blog/${meta.slugOriginal}`}
              className="mb-4 text-primary dark:text-primary-2"
              locale={locale}
            >
              {meta.title}
            </Link>
          </div>
          <ContentInfo
            className="flex my-8 text-xs"
            meta={meta}
            locale={locale}
          />
        </div>
        <hr className="w-full mt-0 mb-12" />
        <p className="text-center text-sm">{meta.description}</p>
      </div>
    </Card>
  );
};

const BlogCardList = trackWindowScroll((props: Props) => {
  const { className, contents, locale, scrollPosition } = props;
  return (
    <div
      className={clsxm(
        'grid grid-cols-1 gap-28 w-full max-w-5xl sm:grid-cols-2',
        className
      )}
    >
      {contents.map((item) => (
        <BlogCard
          key={item.slugOriginal}
          meta={item}
          locale={locale}
          scrollPosition={scrollPosition}
        />
      ))}
    </div>
  );
});

export default BlogCardList;
