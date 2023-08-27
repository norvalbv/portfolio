import processLink from '..';

/**
 * TEST EXAMPLES
 * -------------
 *
 * Blogs: ['CPU', 'RAM']
 *
 * Inputs / Outputs:
 *
 * [[CPU]] -> [CPU](/blogs/CPU)
 * [[CPU#CPU1]] -> [CPU](/blogs/CPU#CPU1)
 * [[CPU|CPU2]] -> [CPU2](/blogs/CPU)
 * [[CPU#CPU1|CPU2]] -> [CPU2](/blogs/CPU#CPU1)
 * [[memory]] -> memory
 * [[memory#memory1]] -> memory
 * [[memory|memory2]] -> memory2
 * [[memory#memory1|memory2]] -> memory
 */

describe('processLink', () => {
  test('should handle simple blog link', () => {
    expect(processLink('[[CPU]]')).toBe('[CPU](/blog/CPU)');
  });

  test('should handle blog link with anchor', () => {
    expect(processLink('[[CPU#CPU1]]')).toBe('[CPU](/blog/CPU#CPU1)');
  });

  test('should handle blog link with name override', () => {
    expect(processLink('[[CPU|CPU2]]')).toBe('[CPU2](/blog/CPU)');
  });

  test('should handle blog link with both anchor and name override', () => {
    expect(processLink('[[CPU#CPU1|CPU2]]')).toBe('[CPU2](/blog/CPU#CPU1)');
  });

  test('should handle non-blog link', () => {
    expect(processLink('[[memory]]')).toBe('memory');
  });

  test('should handle non-blog link with anchor', () => {
    expect(processLink('[[memory#memory1]]')).toBe('memory');
  });

  test('should handle non-blog link with name override', () => {
    expect(processLink('[[memory|memory2]]')).toBe('memory2');
  });

  test('should handle non-blog link with both anchor and name override', () => {
    expect(processLink('[[memory#memory1|memory2]]')).toBe('memory2');
  });
});
