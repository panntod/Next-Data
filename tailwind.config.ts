import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    animation: {
      float: 'float 3s infinite ease-in-out'
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }
      }
    },
    extend: {
      colors: {
        primary: {
          yellow: '#FCA61F',
          blue: '#479BF5'
        },
        secondary: {
          blue: '#003366',
          yellow: '#FDBA09'
        },
        accent: {
          secondary: '#494369',
          default: '#5E587A'
        },
        dark: '#332C5C',
        light: '#FEFEFE',
        'light-blue': '#E2F2FF'
      }
    }
  },
  plugins: []
}
export default config
