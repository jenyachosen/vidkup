export enum I18n {
  uk = 'uk_UA',
  en = 'en_US'
}

export type I18nLocales = keyof typeof I18n;

export interface Portfolio {
  name: string;
  category: string;
  description: string;
  github?: string;
  link?: string;
  image: string;
  stacks: string[];
  isActive?: boolean;
  year: number;
}
