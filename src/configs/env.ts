/** Process ENV */
export const SECRET_KEY = process.env.SECRET_KEY;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

/** NEXT_PUBLIC Process ENV */
export const APP_ENVIRONMENT =
  process.env.NEXT_PUBLIC_APP_ENVIRONMENT || 'production';

/** Custom ENV */
export const IS_DEV = APP_ENVIRONMENT !== 'production';

/* Site Information */
export const SITE_NAME = 'Redemption church';
export const PRODUCTION_URL = 'https://vidkup.com';
export const BASE_URL = IS_DEV ? 'http://localhost:3000' : PRODUCTION_URL;
export const DEFAULT_LOCALE = 'uk';
export const ANALYTICS_ID = '';
export const BLOG_PAGINATION_LIMIT = 6;
export const DISQUS_SHORTNAME = 'vidkup';
export const CLOUDINARY_CLOUD_NAME = 'vidkup';

/* Author Information */
export const AUTHOR_NAME = 'Jenya';
export const AUTHOR_FULLNAME = 'Jenya Korolenko';
export const AUTHOR_EMAIL = 'jeyakoroll@gmail.com';
export const AUTHOR_YOUTUBE = '@RedemptionChurchMukachevo';
export const AUTHOR_FACEBOOK = '';
export const AUTHOR_TWITTER = '';
export const AUTHOR_INSTAGRAM = 'redemption__church';
export const AUTHOR_GITHUB = 'jenyachosen';
export const AUTHOR_LINKEDIN = '';
export const AUTHOR_STEAM = '';
