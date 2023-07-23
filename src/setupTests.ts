/**
 * Mock the `useMountTransition` hook so the components which uses it will always rendered
 */
jest.mock('./hooks/useRandomReveal', () => {
  return {
    isPlaying: false,
    characters: 'Hello World',
    duration: 1,
  };
});
