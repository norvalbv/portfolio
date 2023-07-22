import { Characters } from 'types';

export const getEasingInterval = (
  charactersArray: Characters,
  ignoreCharacterSet?: Characters
): number => {
  const charactersToAnimate = charactersArray.filter(
    (character) => !ignoreCharacterSet?.includes(character)
  ).length;

  return 1 / (charactersToAnimate - 1);
};

export default getEasingInterval;
