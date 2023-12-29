import createContentLocales from './locales';

const withLocales = createContentLocales({
  test: {
    en: 'Test!',
    uk: 'Тест!'
  },
  hello: {
    en: 'Hello',
    uk: 'Привіт'
  }
});

describe('convert content locales data function', () => {
  it('should be return `en` locale properly', () => {
    const enLocales = withLocales('en');
    expect(enLocales.test).toBe('Test!');
    expect(enLocales.hello).toBe('Hello');
  });
  it('should be return `id` locale properly', () => {
    const idLocales = withLocales('uk');
    expect(idLocales.test).toBe('Тест!');
    expect(idLocales.hello).toBe('Привіт');
  });
});
