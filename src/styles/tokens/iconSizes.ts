const iconSizes = {
    xSmall: '16 16',
    small: '24 24',
    medium: '32 32',
    large: '48 48',
    xLarge: '64 64',
  } as const;
  
  export default iconSizes;
  export type ThemeIconSizes = typeof iconSizes;
  export type ThemeIconSizesKeys = keyof typeof iconSizes;