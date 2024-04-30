export const space = {
    // Static spacing
    xxxSmall: '0.25rem', // 4px
    xxSmall: '0.5rem', // 8px
    xSmall: '0.75rem', // 12px
    small: '1rem', // 16px
    medium: '1.5rem', // 24px
    large: '2rem', // 32px
    xLarge: '3rem', // 48px
    xxLarge: '4rem', // 64px
    xxxLarge: '6rem', // 96px
    // Fluid spacing
    // We use this tool to convert https://clamp.font-size.app/
    // Maximum viewport width is 1440px
    // Minimum viewport width is 375px
    // Set mobile/Desktop font size in the calculator
    // Convert rem to px tool https://nekocalc.com/px-to-rem-converter
    fluidXxxSmall: 'clamp(0.25rem, 0.162rem + 0.3756vw, 0.5rem)', // 4px => 8px
    fluidXxSmall: 'clamp(0.5rem, 0.412rem + 0.3756vw, 0.75rem)', // 8px => 12px
    fluidXSmall: 'clamp(0.75rem, 0.662rem + 0.3756vw, 1rem)', // 12px => 16px
    fluidSmall: 'clamp(1rem, 0.8239rem + 0.7512vw, 1.5rem)', // 16px => 24px
    fluidMedium: 'clamp(1.5rem, 1.3239rem + 0.7512vw, 2rem)', // 24px => 32px
    fluidLarge: 'clamp(2rem, 1.6479rem + 1.5023vw, 3rem)', // 32px => 48px
    fluidXLarge: 'clamp(3rem, 2.6479rem + 1.5023vw, 4rem)', // 48px => 64px
    fluidXxLarge: 'clamp(4rem, 3.2958rem + 3.0047vw, 6rem)', // 64px => 96px
    fluidXxxLarge: 'clamp(5rem, 4.6479rem + 1.5023vw, 6rem)', // 80px => 96px
  
    // Special pairs
    fluidxxSmallToSmall: 'clamp(0.5rem, 0.3239rem + 0.7512vw, 1rem)', // 8px => 16px
    fluidXxSmallToLarge: 'clamp(1rem, 0.8239rem + 0.7512vw, 2rem)', // 16px => 32px
    fluidSmallToXLarge: 'clamp(1.5rem, 0.6197rem + 3.7559vw, 4rem)', // 24px => 64px
    fluidLargeToXLarge: 'clamp(2rem, 1.2958rem + 3.0047vw, 4rem)', // 32px => 64px
  } as const;
  
  export default space;
  export type ThemeSpace = typeof space;
  export type ThemeSpaceKeys = keyof typeof space;