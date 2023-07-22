module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
