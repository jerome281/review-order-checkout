const BORDER_WIDTH_OFFSET = 2;
/**
 * Calculates the offset space based on the provided size.
 * @param {string} size - The size of the element in pixels.
 * @returns {string} - The offset space in pixels.
 */
export const getOffsetSpace = (size: string) =>
  `${parseInt(size.replace("px", ""), 10) - BORDER_WIDTH_OFFSET}px`;
