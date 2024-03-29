module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '980px',
      xl: '1100px',
      xxl: '1260px',
    },
    colors: {
      'transparent': 'transparent',
      'blue': '#00609A',
      'blue-light': '#9fceef',
      'purple': '#9ADOFC',
      'pink': '#F3AAAF',
      'red': '#E02B37',
      'darkRed': '#70161C',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#808080',
      'gray': '#AEAFAF',
      'gray-light': '#F2F2F2',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Myriad Pro', 'sans-serif'],
      serif: ['Minion Pro', 'serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        75: '4.688rem',
        128: '25rem',
        144: '36rem',
      },
      padding: {
        layout: '3.75rem', //60px
        layoutSm: '2rem', //20px
      },
      letterSpacing: {
        custom: '0.03rem',
      },
      fontSize: {
        h1: [
          '4rem', //64px
          {
            lineHeight: '120%',
          },
        ],
        h2: [
          '3rem', //48px
          {
            lineHeight: '100%',
          },
        ],
        h3: [
          '2.5rem', //40px
          {
            lineHeight: '120%',
          },
        ],
        h4_5: ['2.25rem'], //36px
        h4_2: [
          '2rem', //32px
          {
            lineHeight: '140%',
          },
        ],
        h4: [
          '1.75rem', //28px
          {
            lineHeight: '140%',
          },
        ],
        h5: [
          '1.5rem', //24px
          {
            lineHeight: '140%',
          },
        ],
        h6: [
          '1.375rem', //22px
          {
            lineHeight: '140%',
          },
        ],
        p: [
          '1.25rem', //20px
          {
            lineHeight: '140%',
          },
        ],
        p18: ['1.125rem'], //18px
        p16: [
          '1rem', //16px
          {
            lineHeight: '130%',
          },
        ],
        p14: [
          '0.875rem', //14px
          {
            lineHeight: '130%',
          },
        ],
        headerLink: [
          '1.125rem', //18px
          {
            lineHeight: '120%',
          },
        ],
        label: [
          '0.75rem', //12px
          {
            lineHeight: '140%',
          },
        ],
      },
      colors: {
        primary: '#1E66E9',
        secondary: '#000069',
        success: '#69D742',
        warning: '#FFCF86',
        info: '#86DBFF',
        heading: '#26272E',
        default: '#6E707C',
        'section-grey': '#F9F9FF',
        'features-blue': '#021235',
        'privacy-buttons': '#36353D',
        lightGrey: '#F5F5F7',
        Grey: '#C4C4C4',
        DarkGrey: '#757575',
      },
      boxShadow: {
        'custom-header': '0px 1px 0px rgba(220, 221, 222)',
        'connect-wallet-shadow': '0px 4px 18px rgba(0, 0, 0, 0.25)',
        'privacy-shadow': '0px 4px 8px rgba(38, 39, 46, 0.12)',
        'custom-1': '0px 7px 25px rgba(38, 39, 46, 0.06)',
        'custom-2': '0px 7px 10px rgba(38, 39, 46, 0.06)',
      },
      lineHeight: {
        75: '4.375rem',
      },
      backgroundImage: {
        heroImg: "url('/src/assets/images/hero-image.jpg')",
        grayCurved: "url('/src/assets/images/grey-curved-bg.jpg')",
        search: "url('/src/assets/images/search-bg.jpg')",
      },
      borderRadius: {
        20: '20px',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
    },
  },
  variants: {},
  plugins: [],
}
