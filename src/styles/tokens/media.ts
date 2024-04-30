const media = {
    small: '490px',
    medium: '768px',
    large: '992px',
    xLarge: '1200px',
  } as const;
  
  export default media;
  export type ThemeMedia = typeof media;
  export type ThemeMediaKeys = keyof typeof media;