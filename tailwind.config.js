/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig } */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  content: [
    // './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/contents/**/*.{md,mdx}'
  ],
  safelist: [
    {
      pattern:
        /^(bg)-(black|white|transparent|primary|accent|secondary|success|info|warning|danger|light|dark)/
    }
  ],
  theme: {
    fontFamily: {
      courgette: ['"Courgette"', 'cursive'],
      poppins: ['"Poppins"', 'sans-serif']
    },
    screens: {
      '2xs': '360px',
      xs: '428px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    container: {
      screens: {
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    },
    width: {
      0: 0,
      10: '10%',
      25: '25%',
      50: '50%',
      75: '70%',
      full: '100%',
      screen: '100vw'
    },
    height: {
      0: 0,
      10: '10%',
      25: '25%',
      50: '50%',
      75: '70%',
      full: '100%',
      screen: '100vh'
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        1: '#5E72E4',
        2: '#B89BFF',
        DEFAULT: '#5E72E4'
      },
      accent: {
        1: '#FF50A5',
        2: '#F3A4B5',
        DEFAULT: '#FF50A5'
      },
      success: {
        1: '#2DCE89',
        2: '#A0FFCF',
        DEFAULT: '#2DCE89'
      },
      info: {
        1: '#11CDEF',
        2: '#4ADEDE',
        DEFAULT: '#11CDEF'
      },
      warning: {
        1: '#FB6340',
        2: '#FDC094',
        DEFAULT: '#FB6340'
      },
      danger: {
        1: '#F5365C',
        2: '#FE676E',
        DEFAULT: '#F5365C'
      },
      light: {
        10: '#666B71',
        20: '#A1A1A3',
        30: '#CACBCF',
        40: '#E6E8EE',
        50: '#EAEAEA',
        60: '#F1F1F1',
        70: '#F7F9FC',
        DEFAULT: '#666B71'
      },
      dark: {
        10: '#0B2032',
        20: '#0E263A',
        30: '#0F2D44',
        40: '#113754',
        50: '#23395D',
        60: '#282F5E',
        70: '#313764',
        DEFAULT: '#0C1F30'
      }
    },
    spacing: {
      0: 0,
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      8: '8px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
      68: '68px',
      72: '72px',
      76: '76px',
      80: '80px',
      84: '84px',
      88: '88px',
      92: '92px',
      96: '96px',
      100: '100px'
    },
    borderRadius: {
      0: 0,
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      full: '50%'
    },
    extend: {
      boxShadow: {
        'md-bottom': '0 2px 4px 0 rgba(0, 0, 0, 0.1)'
      },
      colors: {
        'github': '#222222',
        'linkedin': '#0073b1',
        'instagram': '#e4405f',
        'facebook': '#3b5999',
        'twitter': '#1da1f2',
        'tumblr': '#37455c',
        'whatsapp': '#06d755',
        'telegram': '#35ace1',
        'youtube': '#cd201f',
        'steam': '#2a475e'
      },
      keyframes: {
        'scale': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        'y-t-25': {
          from: {
            opacity: 0,
            transform: 'translate(0, -25px)'
          },
          to: {
            opacity: 1,
            transform: 'translate(0)'
          }
        },
        'y-b-25': {
          from: {
            opacity: 0,
            transform: 'translate(0, 25px)'
          },
          to: {
            opacity: 1,
            transform: 'translate(0)'
          }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-out-down': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)'
          }
        },
        'fade-out-left': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          }
        },
        'fade-out-right': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
          }
        },
        'fade-out-up': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
          }
        },
        'slide-in-down': {
          '0%': {
            visibility: 'visible',
            transform: 'translate3d(0, -100%, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'slide-in-left': {
          '0%': {
            visibility: 'visible',
            transform: 'translate3d(-100%, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'slide-in-right': {
          '0%': {
            visibility: 'visible',
            transform: 'translate3d(100%, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'slide-in-up': {
          '0%': {
            visibility: 'visible',
            transform: 'translate3d(0, 100%, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'slide-out-down': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            visibility: 'hidden',
            transform: 'translate3d(0, 100%, 0)'
          }
        },
        'slide-out-left': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            visibility: 'hidden',
            transform: 'translate3d(-100%, 0, 0)'
          }
        },
        'slide-out-right': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            visibility: 'hidden',
            transform: 'translate3d(100%, 0, 0)'
          }
        },
        'slide-out-up': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            visibility: 'hidden',
            transform: 'translate3d(0, -100%, 0)'
          }
        },
        'slide-down': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 100%, 0)'
          }
        },
        'slide-left': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(-100%, 0, 0)'
          }
        },
        'slide-right': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(100%, 0, 0)'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, -100%, 0)'
          }
        },
        'zoom-in': {
          '0%': {
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
          },
          '50%': {
            opacity: 1
          }
        },
        'zoom-out': {
          '0%': {
            opacity: 1
          },
          '50%': {
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
          },
          '100%': {
            opacity: 0
          }
        },
        tada: {
          '0%': {
            transform: 'scale3d(1, 1, 1)'
          },
          '10%, 20%': {
            transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'
          },
          '30%, 50%, 70%, 90%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
          },
          '40%, 60%, 80%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)'
          }
        },
        'spinner-grow': {
          '0%': {
            transform: 'scale(0)'
          },
          '50%': {
            transform: 'none',
            opacity: '1'
          }
        },
        'placeholder-wave': {
          '100%': { maskPosition: '-200% 0%' }
        },
        'show-up-clock': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.7)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        progress: {
          '0%': { transform: 'translateX(-45%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'drop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
            animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'drop-out': {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
            animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)'
          },
          '100%': { opacity: '0', transform: 'scale(0)' }
        },
        'fly-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
        },
        'fly-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 1500px, 0)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '60%': { opacity: '1', transform: 'translate3d(0, -20px, 0)' },
          '75%': { transform: 'translate3d(0, 10px, 0)' },
          '90%': { transform: 'translate3d(0, -5px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        'fly-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -1500px, 0)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '60%': { opacity: '1', transform: 'translate3d(0, 25px, 0)' },
          '75%': { transform: 'translate3d(0, -10px, 0)' },
          '90%': { transform: 'translate3d(0, 5px, 0)' },
          '100%': { transform: 'none' }
        },
        'fly-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(1500px, 0, 0)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '60%': { opacity: '1', transform: 'translate3d(-25px, 0, 0)' },
          '75%': { transform: 'translate3d(10px, 0, 0)' },
          '90%': { transform: 'translate3d(-5px, 0, 0)' },
          '100%': { transform: 'none' }
        },
        'fly-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-1500px, 0, 0)',
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '60%': { opacity: '1', transform: 'translate3d(25px, 0, 0)' },
          '75%': { transform: 'translate3d(-10px, 0, 0)' },
          '90%': { transform: 'translate3d(5px, 0, 0)' },
          '100%': { transform: 'none' }
        },
        'fly-out': {
          '0%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': {
            transform: 'scale3d(0.9, 0.9, 0.9)'
          },
          '50%, 55%': {
            opacity: '1',
            transform: 'scale3d(1.1, 1.1, 1.1)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)'
          }
        },
        'fly-out-up': {
          '0%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': {
            transform: 'translate3d(0, 10px, 0)'
          },
          '40%, 45%': {
            opacity: '1',
            transform: 'translate3d(0, -20px, 0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translate3d(0, 2000px, 0)'
          }
        },
        'fly-out-down': {
          '0%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': {
            transform: 'translate3d(0, -10px, 0)'
          },
          '40%, 45%': {
            opacity: '1',
            transform: 'translate3d(0, 20px, 0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translate3d(0, -2000px, 0)'
          }
        },
        'fly-out-left': {
          '0%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': {
            opacity: '1',
            transform: 'translate3d(-20px, 0, 0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translate3d(2000px, 0, 0)'
          }
        },
        'fly-out-right': {
          '0%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
          },
          '20%': {
            opacity: '1',
            transform: 'translate3d(20px, 0, 0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translate3d(-2000px, 0, 0)'
          }
        },
        'browse-in': {
          '0%': { transform: 'scale(0.8) translateZ(0px)', zIndex: '-1' },
          '10%': {
            transform: 'scale(0.8) translateZ(0px)',
            zIndex: '-1',
            opacity: '0.7'
          },
          '80%': {
            transform: 'scale(1.05) translateZ(0px)',
            zIndex: '999',
            opacity: '1'
          },
          '100%': { transform: 'scale(1) translateZ(0px)', zIndex: '999' }
        },
        'browse-out': {
          '0%': {
            transform: 'translateX(0%) rotateY(0deg) rotateX(0deg)',
            zIndex: '999'
          },
          '50%': {
            transform:
                'translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)',
            zIndex: '-1'
          },
          '80%': { opacity: '1' },
          '100%': {
            zIndex: '-1',
            opacity: '0',
            transform:
                'translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)'
          }
        },
        'browse-out-left': {
          '0%': {
            transform: 'translateX(0%) rotateY(0deg) rotateX(0deg)',
            zIndex: '999'
          },
          '50%': {
            transform:
                'translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)',
            zIndex: '-1'
          },
          '80%': { opacity: '1' },
          '100%': {
            zIndex: '-1',
            opacity: '0',
            transform:
                'translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)'
          }
        },
        'browse-out-right': {
          '0%': {
            transform: 'translateX(0%) rotateY(0deg) rotateX(0deg)',
            zIndex: '999'
          },
          '50%': {
            transform:
                'translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)',
            zIndex: '1'
          },
          '80%': { opacity: '1' },
          '100%': {
            zIndex: '1',
            opacity: '0',
            transform:
                'translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)'
          }
        },
        jiggle: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' }
        },
        flash: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' }
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-10px)'
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(10px)'
          }
        },
        glow: {
          '0%': { backgroundColor: '#fcfcfd' },
          '30%': { backgroundColor: '#fff6cd' },
          '100%': { backgroundColor: '#fcfcfd' }
        }
      }
    }
  },
  variants: {
    extend: {
      margin: ['hover']
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms')({
    //   strategy: 'class' // only generate classes
    // })
  ]
};
