import {
  Fragment,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState
} from 'react';
import { useRouter } from 'next/router';

import Link from '@/components/base/Link';
import SwitchTheme from '@/components/base/Switch/Theme';
import ButtonClose from '@/components/base/Button/Close';
import SVG from '@/components/base/Image/SVG';
import Modal from '@/components/base/Modal';
import Dropdown from '@/components/base/Dropdown';

import { useToggler, useUpdated, useScrollListener } from '@/hooks';
import { DEFAULT_LOCALE, SITE_NAME } from '@/configs/env';
import clsxm from '@/utils/helpers/clsxm';

// import IconAppLogo from '$/assets/icons/app/logo.svg';
// import IconAppLogoSecondary from '$/assets/icons/app/logo-secondary.svg';
import IconHamburger from '$/assets/icons/tools/hamburger.svg';
import IconArrowForward from '$/assets/icons/tools/arrow-forward.svg';
import styles from './styles.module.css';
import useAppTheme from '@/hooks/stores/useAppTheme';
import { I18nLocales } from '@/types/contents';
import createContentLocales from '@/utils/helpers/locales';

interface LocaleItemProps {
  code: I18nLocales;
  active: boolean;
  pathname: string;
  asPath: string;
  onLocaleChange?: (locale: I18nLocales) => {
    pathname?: string;
    asPath?: string;
  };
}

export interface Props {
  title?: ReactNode | string;
  className?: string;
  localeChange?: boolean;
  onLocaleChange?: LocaleItemProps['onLocaleChange'];
}

const withLocales = createContentLocales({
  home: {
    en: 'Home',
    uk: 'Головна'
  },
  classes: {
    en: 'Сlasses',
    uk: 'Класи'
  },
  floorball: {
    en: 'Floorball',
    uk: 'Флорбол'
  },
  media: {
    en: 'Media',
    uk: 'Медіа'
  },
  stuff: {
    en: 'Stuff',
    uk: 'Команда'
  },
  blog: {
    en: 'Blog',
    uk: 'Блог'
  },
  contact: {
    en: 'Contact',
    uk: 'Контакти'
  }
});

export const menus = [
  { label: 'home', href: '/' },
  { label: 'classes', href: '/classes' },
  { label: 'floorball', href: '/floorball' },
  { label: 'media', href: '/media' },
  { label: 'stuff', href: '/stuff' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' }
];

export const i18nList = new Map([
  ['uk', <>🇺🇦&nbsp;&nbsp;UK</>],
  ['en', <>🇺🇸&nbsp;&nbsp;EN</>]
]);

const LocaleItem: FunctionComponent<PropsWithChildren<LocaleItemProps>> = (
  props
) => {
  const { children, code, active, pathname, asPath, onLocaleChange } = props;
  const locales = useMemo(() => onLocaleChange?.(code) ?? {}, []);
  return (
    <Link
      href={locales.pathname ?? pathname}
      asPath={locales.asPath ?? asPath}
      locale={code}
      className={clsxm(
        'text-dark-70 dark:text-white hover:no-underline',
        active && 'text-accent-1 dark:text-accent-2'
      )}
    >
      {children}
    </Link>
  );
};

const Navbar: FunctionComponent<Props> = (props) => {
  const { title, className, localeChange, onLocaleChange } = props;
  const [transparent, setTransparent] = useState(true);
  const [modalClass, setModalClass] = useState('');
  const [modalVisibility, modalToggler] = useToggler();
  const router = useRouter();
  const { pathname, locale, asPath } = router;
  const [theme] = useAppTheme();
  const locales = useMemo(() => withLocales(locale), [locale]);

  const textShadowClass = useMemo(() => {
    return transparent ? 'util--text-shadow' : '';
  }, [transparent]);

  const headerClass = useMemo(() => {
    return transparent
      ? 'bg-transparent'
      : 'bg-primary shadow-md-bottom dark:bg-dark-60';
  }, [transparent]);

  const localeChanges = useCallback(
    (code: string) => {
      return onLocaleChange?.(code as I18nLocales) ?? {};
    },
    [onLocaleChange]
  );

  useScrollListener(({ scrollY }) => {
    setTransparent(scrollY < 5);
  }, 'window');

  useUpdated(() => {
    const newClass = modalVisibility ? 'mt-12 opacity-100' : '';
    setModalClass(newClass);
  }, [modalVisibility]);

  console.log('=============Navbar==============');
  console.log({ locale, router });
  console.log('====================================');

  return (
    <Fragment>
      <nav className={clsxm(styles.header, headerClass, className)}>
        <div className={styles['header-container']}>
          {/* <SVG
            className="inline-block 2xs:hidden mr-8"
            src={theme?.current === 'dark' ? IconAppLogo : IconAppLogoSecondary}
            size={32}
          /> */}
          <Link
            href="/"
            className={clsxm(
              'hidden 2xs:flex hover:util--text-shadow-white',
              'justify-center items-center text-base xs:text-xl sm:text-2xl',
              'transition-all duration-150 text-white dark:text-white',
              'hover:scale-105 hover:no-underline hover:text-light-50',
              textShadowClass
            )}
          >
            {title}
          </Link>
          <div className="flex flex-grow font-poppins font-bold justify-end items-center xs:ml-16">
            {localeChange && (
              <Dropdown
                className="bg-transparent px-8 pt-[3px]"
                title={i18nList.get(locale || DEFAULT_LOCALE)}
                // title={i18nList.get(DEFAULT_LOCALE)}
                btnClassName="text-sm rounded-4 md:text-base"
              >
                {Array.from(i18nList).map(([code, label]) => (
                  <Dropdown.Item
                    key={code}
                    className="text-sm md:text-base"
                    active={code === locale}
                  >
                    <LocaleItem
                      active={code === locale}
                      pathname={pathname}
                      asPath={asPath}
                      onLocaleChange={localeChanges}
                      code={code as I18nLocales}
                    >
                      {label}
                    </LocaleItem>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            )}
            <SwitchTheme className={clsxm(textShadowClass, 'px-8')} />
            <div className="hidden md:block">
              {menus.map(({ label, href }, idx) => {
                type NavNames = Record<
                  | 'home'
                  | 'classes'
                  | 'floorball'
                  | 'media'
                  | 'stuff'
                  | 'blog'
                  | 'contact',
                  string
                >;
                const locale = locales[label as keyof NavNames];
                // console.log('=============Navbar================');
                // console.log({ locale, label });
                // console.log('====================================');
                return (
                  <Link
                    key={href}
                    href={href}
                    className={clsxm(
                      'font-bold text-lg mx-8 transition-all duration-200 hover:scale-105 hover:no-underline',
                      idx === menus.length - 1 ? 'mr-0' : '',
                      pathname === href && 'pointer-events-none',
                      textShadowClass
                    )}
                  >
                    <span
                      className={clsxm({
                        'text-primary-2 dark:text-accent-2': pathname === href,
                        'text-white dark:text-white hover:util--text-shadow-white':
                          pathname !== href
                      })}
                    >
                      {/* {label} */}
                      {locale}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="block md:hidden">
              <SVG
                stroke="white"
                src={IconHamburger}
                className={`cursor-pointer transition-all duration-150 ${
                  modalClass ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
                }`}
                onClick={modalToggler}
                size={32}
              />
            </div>
          </div>
        </div>
      </nav>
      <Modal
        show={modalVisibility}
        toggler={modalToggler}
        className={clsxm(
          styles['header-mobile'],
          'bg-white self-start justify-self-center opacity-0 -mt-52 dark:bg-dark-60',
          modalClass
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-courgette transition-all duration-200 font-bold text-xl text-dark dark:text-white hover:no-underline hover:scale-105 hover:util--text-shadow-white"
          >
            {title}
          </Link>
          <ButtonClose onClick={modalToggler} />
        </div>
        <hr className="my-8" />
        <div className="flex flex-col justify-center">
          {menus.map(({ label, href }, idx) => {
            const menuClass =
              pathname === href
                ? 'pointer-events-none text-primary-2 dark:text-accent-2'
                : 'text-dark dark:text-white';

            // debugger;
            return (
              <Link
                key={href}
                href={href}
                delay={300}
                className={clsxm(
                  'group flex justify-between items-center font-bold my-4 transition-all duration-100 hover:translate-x-8 active:scale-100',
                  menuClass,
                  idx === menus.length - 1 ? 'mb-0' : ''
                )}
              >
                {label}
                <SVG
                  size={16}
                  className={menuClass}
                  src={IconArrowForward}
                  fill="currentColor"
                />
              </Link>
            );
          })}
        </div>
      </Modal>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: SITE_NAME,
  className: ''
};

export default Navbar;
