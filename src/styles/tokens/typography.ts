export const fontWeight = {
  regular: 400,
  bold: 700,
};

export interface ThemeType {
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  textTransform?: string;
  letterSpacing?: string;
}

// Clamp is used to create a fluid typography scale.
// We use this tool to convert https://clamp.font-size.app/
// Maximum viewport width is 1200px
// Minimum viewport width is 376px
// Set mobile/Desktop font size in the calculator
// Convert rem to px tool https://nekocalc.com/px-to-rem-converter

const displayBase = {
  fontWeight: fontWeight.regular,
};

const headingExtraSmallBase = {
  fontSize: 'clamp(0.875rem, 0.7039rem + 0.7282vw, 1.25rem)', // 14px => 20px
  lineHeight: 'clamp(1.125rem, 0.8169rem + 1.3146vw, 2rem)', // 18px => 32px
};

const bodyLargeBase = {
  fontSize: 'clamp(1.25rem, 1.1359rem + 0.4854vw, 1.5rem)', // 20px => 24px
  lineHeight: 'clamp(1.75rem, 1.6359rem + 0.4854vw, 2rem)', // 28px => 32px
};

const bodyMediumBase = {
  fontSize: '1rem', // 16px
  lineHeight: '1.5rem', // 24px
};

const bodySmallBase = {
  fontSize: '0.875rem', // 14px
  lineHeight: '1.125rem', // 18px
};

const typography = {
  headingLarge: {
    fontSize: 'clamp(2.375rem, 2.1468rem + 0.9709vw, 2.875rem);', // 38px => 46px
    lineHeight: 'clamp(2.875rem, 2.6468rem + 0.9709vw, 3.375rem);', // 46px => 54px
    ...displayBase,
  },
  headingMedium: {
    //fontFamily: fontFamily.headingBold,
    fontSize: 'clamp(1.375rem, 1.1468rem + 0.9709vw, 1.875rem);', // 22px => 30px
    lineHeight: 'clamp(1.75rem, 1.5789rem + 0.7282vw, 2.125rem);', // 28px => 34px
    ...displayBase,
  },
  headingSmall: {
    //fontFamily: fontFamily.headingBold,
    fontSize: 'clamp(1.25rem, 1.1359rem + 0.4854vw, 1.5rem)', // 20px => 24px
    lineHeight: 'clamp(1.75rem, 1.6359rem + 0.4854vw, 2rem)', // 28px => 32px
    ...displayBase,
  },
  headingExtraSmall: {
    //fontFamily: fontFamily.heading,
    fontWeight: fontWeight.regular,
    ...headingExtraSmallBase,
  },

  bodyLarge: {
    fontWeight: fontWeight.regular,
    ...bodyLargeBase,
  },
  bodyLargeBold: {
    fontWeight: fontWeight.bold,
    ...bodyLargeBase,
  },
  bodyMedium: {
    fontWeight: fontWeight.regular,
    ...bodyMediumBase,
  },
  bodyMediumBold: {
    fontWeight: fontWeight.bold,
    ...bodyMediumBase,
  },
  bodySmall: {
    fontWeight: fontWeight.regular,
    ...bodySmallBase,
  },
  bodySmallBold: {
    fontWeight: fontWeight.bold,
    ...bodySmallBase,
  },
  caps: {
    fontWeight: fontWeight.bold,
    //fontFamily: fontFamily.base,
    fontSize: 'clamp(0.625rem, 0.4688rem + 0.5vw, 0.75rem)', // 10px > 12px
    lineHeight: 'clamp(0.625rem, 0.4688rem + 0.5vw, 0.75rem)', // 10px > 12px
    textTransform: 'uppercase',
    letterSpacing: '0.063rem', // 1px
  },
  capsSmall: {
    fontWeight: fontWeight.bold,
    //fontFamily: fontFamily.base,
    fontSize: '0.625rem', // 10px
    lineHeight: '0.625rem', // 10px
    textTransform: 'uppercase',
    letterSpacing: '0.063rem', // 1px
  },
  quote: {
    fontWeight: fontWeight.regular,
    //fontFamily: fontFamily.heading,
    fontSize: '2rem', // 32px
    lineHeight: '2.5rem', // 40px
  },
} as const;

export default typography;

export type ThemeTypographyKeys = keyof typeof typography;
export type ThemeTypography = Record<ThemeTypographyKeys, ThemeType>;
