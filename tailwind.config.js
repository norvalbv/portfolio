module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Victor Mono', 'monospace'] },
      keyframes: {
        fall: {
          '0%': { top: '-10%' },
          '100%': { top: `110%` },
        },
      },
      animation: { fall: 'fall linear infinite' },
    },
  },
  plugins: [],
};
