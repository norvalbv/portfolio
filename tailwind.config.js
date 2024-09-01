module.exports = {
  darkMode: 'class',
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Numbers represent the darkness / lightness compared to the main colour.
        dark: {
          dark: '#000000',
          neutral: '#232323',
          text: '#E9EBE6',
          code: '#222222',
        },
        light: {
          dark: '#E9ECEf',
          neutral: '#F3F4F6',
          text: '#1A181E',
          code: '#D0D0DD',
        },
        accent: {
          primary: '#0A5C36',
          secondary: '#006466',
          tertiary: '#9F3FBF',
        },
      },
      fontFamily: { sans: ['Victor Mono', 'monospace'] },
      keyframes: {
        fall: {
          '0%': { top: '-10%' },
          '100%': { top: `110%` },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-125%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: { fall: 'fall linear infinite' },
    },
  },
  plugins: [],
};
