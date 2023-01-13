module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LightSmoke: '#FEFEFE',
        Smoke: '#FAFAFA',
        DarkSmoke: '#DFDFDF',
        Grey: '#999999',
        Dark: '#404040',
        LightPink: '#FFE6E8',
        Pink: '#EC4794',
        Salmon: '#FE6675',
        LightGreen: '#65E0A4',
        Green: '#00C673',
        Yellow: '#FFC700',
        Teal: '#1FA0BD',
        DefaultGrey: '#E9EEF1'
      }
    },
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      brightness: ['hover', 'focus'],
      invert: ['hover', 'focus'],

    },
  },
  plugins: [],
}
