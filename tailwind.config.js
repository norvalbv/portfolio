module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Numbers represent the darkness / lightness compared to the main colour.
        dark: {
          dark: '#000000',
          neutral: '#1A181E',
          text: '#E9EBE6',
        },
        light: {
          dark: '#E9EBE6',
          neutral: '#F3F4F6',
          text: '#1A181E',
        },
        accent: {
          main: '#16A34A',
          secondary: '#0284C7',
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
