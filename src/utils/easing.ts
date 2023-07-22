export const easing = {
  easeOutQuad: (t: number, b: number, c: number, d: number): number => {
    // eslint-disable-next-line no-param-reassign
    t /= d;
    return -c * t * (t - 2) + b;
  },

  easeInQuad: (t: number, b: number, c: number, d: number): number => {
    // eslint-disable-next-line no-param-reassign
    t /= d;
    return c * t * t + b;
  },

  random: (_: number, b: number, c: number): number => {
    return Math.floor(Math.random() * (c - b + 1) + b);
  },

  linear: (t: number, b: number, c: number, d: number): number => {
    return (c * t) / d + b;
  },
};

export default easing;
