// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values#whitespace_keys
export const SUBMIT_KEYS = ['Enter', ' '];

/**
 * Checks if the provided keyboard event corresponds to a submit key.
 * @param event - The keyboard event to check.
 * @returns True if the event corresponds to a submit key, false otherwise.
 */
export const isSubmitKey = <T extends HTMLElement | SVGElement = HTMLElement>(
  event: React.KeyboardEvent<T>
): boolean => {
  return SUBMIT_KEYS.includes(event.key);
};

export default isSubmitKey;
