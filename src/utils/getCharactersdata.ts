import { ReactNode } from 'react';
import { Props } from '@/src/types';
import { getPartsTime } from './getPartsTime';
import { getEasingInterval } from './getEasingInterval';
import { easing } from './easing';

type GetCharactersDataReturnType = {
  character: ReactNode;
  isIgnored: boolean;
  revealTime: number;
};

/**
 * returns an array of objects where each object contains data for each character
 */

export const getCharactersData = ({
  characters,
  duration,
  revealDuration = 0.6,
  revealEasing = 'linear',
  ignoreCharacterSet,
}: Props): GetCharactersDataReturnType[] => {
  const charactersArray = Array.isArray(characters) ? characters : characters.split('');
  const [randomSec, revealingSec] = getPartsTime(duration, revealDuration);
  const easingFunc = easing[revealEasing];
  const interval = getEasingInterval(charactersArray, ignoreCharacterSet);
  let step = 0;

  const getRevealTime = (isIgnored: boolean): number => {
    if (isIgnored || revealDuration === 0) {
      return duration;
    }

    const revealTime = easingFunc(step * interval, 0, revealingSec, 1);
    step += 1;

    return randomSec + revealTime;
  };

  return charactersArray.map((character) => {
    const isIgnored = !!ignoreCharacterSet?.find(
      (ignoreCharacter) => ignoreCharacter === character
    );

    return {
      character,
      isIgnored,
      revealTime: getRevealTime(isIgnored),
    };
  });
};

export default getCharactersData;
