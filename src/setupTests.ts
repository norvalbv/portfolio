/**
 * Mock the `useMountTransition` hook so the components which uses it will always rendered
 */
jest.mock('./@/src/hooks/useRandomReveal', () => ({
  useRandomReveal: (): string[] => ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'],
}));

/**
 * Mock the Analytics service
 */
jest.mock('./services/AnalyticsService', () => {
  return {
    AsInitialize: jest.fn(),
    AsSetUser: jest.fn(),
    AsTrack: jest.fn(),
  };
});

/**
 * Mock Math.random()
 */
global.Math.random = (): number => 0.314159265358979;
