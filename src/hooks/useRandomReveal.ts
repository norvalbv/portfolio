import { Characters, Props } from '@/src/types';
import { getCharactersData, getRandomCharacter } from '@/src/utils';
import { cloneElement, isValidElement, useRef } from 'react';
import { useElapsedTime } from 'use-elapsed-time';

export const useRandomReveal = (props: Props): Characters => {
  const prevTimeRef = useRef<number>();
  const charactersRef = useRef<Characters>([]);

  const { elapsedTime } = useElapsedTime({
    isPlaying: props.isPlaying,
    duration: props.duration,
    updateInterval: props.updateInterval ?? 0.065,
    onComplete: props.onComplete,
  });

  if (prevTimeRef.current === elapsedTime) {
    return charactersRef.current;
  }

  prevTimeRef.current = elapsedTime;
  charactersRef.current = [];

  const charactersData = getCharactersData(props);

  // the fastest way to iterate over an array
  for (let i = 0; i < charactersData.length; i += 1) {
    const { character, isIgnored, revealTime } = charactersData[i];
    const nextCharacter =
      isIgnored || elapsedTime >= revealTime ? character : getRandomCharacter(props.characterSet);

    charactersRef.current.push(
      isValidElement(nextCharacter) ? cloneElement(nextCharacter, { key: i }) : nextCharacter
    );
  }

  return charactersRef.current;
};
