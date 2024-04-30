const gradients = {
    multiColorVertical:
      'linear-gradient(360deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%, rgba(177, 108, 234, 1) 14.06%, rgba(255, 94, 105, 1) 44.79%, rgba(255, 138, 86, 1) 71.87%, rgba(255, 168, 75, 1) 100%)',
    multiColorHorizontal:
      'linear-gradient(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%, rgba(177, 108, 234, 1) 14.06%, rgba(255, 94, 105, 1) 44.79%, rgba(255, 138, 86, 1) 71.87%, rgba(255, 168, 75, 1) 100%)',
  } as const;
  
  export default gradients;
  
  export type ThemeGradients = typeof gradients;
  export type ThemeGradientsKeys = keyof typeof gradients;

