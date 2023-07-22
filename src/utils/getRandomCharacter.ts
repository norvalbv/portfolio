import { ReactNode } from 'react';
import { Characters } from 'types';

const DEFAULT_CHARACTER_SET = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const getRandomCharacter = (set: Characters = DEFAULT_CHARACTER_SET): ReactNode =>
  set[Math.floor(Math.random() * set.length)];

export default getRandomCharacter;
