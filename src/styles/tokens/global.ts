const global = {} as const;

export default global;
export type ThemeGlobal = typeof global;
export type ThemeGlobalKeys = keyof typeof global;