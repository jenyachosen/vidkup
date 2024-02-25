import { FunctionComponent, useCallback, useMemo } from 'react';
import { Button, SVG } from '@/components/base';
import { I18nLocales } from '@/types/contents';
import { AUTHOR_TWITTER, BASE_URL } from '@/configs/env';
import { ContentMeta } from '@/server/content-parser';
import createPopUp from '@/utils/helpers/popup';

import createContentLocales from '@/utils/helpers/locales';

interface Props {
  path: string;
  meta: ContentMeta;
  locale: I18nLocales | string;
}

const withLocales = createContentLocales({
  share: {
    en: 'Share',
    uk: 'Поділіться'
  }
});

const btnShareClasses =
  'shadow-lg rounded-full p-12 mx-4 mb-12 hover:-mt-8 hover:scale-105';

const Share: FunctionComponent<Props> = (props) => {
  const { path, meta, locale } = props;
  const { title, description, tags } = meta;

  const locales = useMemo(() => withLocales(locale), [locale]);

  return (
    <div className="mt-40">
      <h4 className="text-center mb-12">{locales.share}</h4>
      <div className="relative flex justify-center items-center flex-wrap">
        {/* {socialShares.map((social) => (
          <Button
            label={`Button to ${social.label}`}
            disableHover
            key={social.label}
            onClick={onShare(social)}
            delay={300}
            data-umami-event={`share-${social.label
              .substring(9)
              .toLocaleLowerCase()}`}
            className={`${social.color} ${btnShareClasses}`}
          >
            <SVG fill="white" size={24} src={social.logo} />
          </Button>
        ))} */}
      </div>
    </div>
  );
};

export default Share;
