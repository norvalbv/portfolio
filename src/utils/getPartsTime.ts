/**
 * returns an array of 2 numbers where the first one is
 * the duration of the random characters and the second one is the
 * the revealing duration
 */

export const getPartsTime = (duration: number, revealDuration: number): [number, number] => {
  if (revealDuration === 0) {
    return [duration, 0];
  }

  let revealFraction = revealDuration > 1 ? 1 : revealDuration;
  revealFraction = revealFraction < 0 ? 0 : revealFraction;

  const revealDurationSec = duration * revealFraction;
  return [duration - revealDurationSec, revealDurationSec];
};

export default getPartsTime;
