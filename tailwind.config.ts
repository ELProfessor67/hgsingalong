import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
       
        "backgroud-primary": "#ffffff",
        "backgroud-secondary": "#000000",
        // "foregroud-primary": "#71C9CE",
        // "foregroud-primary": "#66fcf1",
        "foregroud-primary": "#A79369",
        "foregroud-secondary": "#ffffff",
        "para-color": "#242424",
        "heading-color":"#564f4f",
        background: {
          1: "#e6fffd",
          2: "#c9dae0",
          3: "#1f2226",
          4: "#1a1d22"
        },


        dark: {
          1: '#fafbfe',
          2: '#fafbfe',
          3: '#fafbfe',
          4: '#fafbfe',
        },
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
