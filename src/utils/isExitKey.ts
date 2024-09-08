// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values#whitespace_keys

/**
 * Checks if the provided keyboard event corresponds to a exit key.
 * @param event - The keyboard event to check.
 * @returns True if the event corresponds to a exit key, false otherwise.
 */
export const isExitKey = <T extends HTMLElement | SVGElement = HTMLElement>(
  event: React.KeyboardEvent<T>
): boolean => {
  return event.key === 'Escape';
};

export default isExitKey;
