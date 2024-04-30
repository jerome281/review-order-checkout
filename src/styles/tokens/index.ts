// This file allows for the theme to be extended by the child theme.
import theme from '../theme';
import colorDefaults from './colors';
import borderDefaults from './borders';
import layersDefaults from './layers';
import mediaDefaults from './media';
import maxMediaDefaults from './maxMedia';
import spaceDefaults from './space';
import typographyDefaults from './typography';
import globalDefaults from './global';

export const colors = { ...colorDefaults, ...(theme.colors || {}) };
export const borders = { ...borderDefaults, ...(theme.borders || {}) };
export const layers = { ...layersDefaults, ...(theme.layers || {}) };
export const media = { ...mediaDefaults, ...(theme.media || {}) };
export const maxMedia = { ...maxMediaDefaults, ...(theme.maxMedia || {}) };
export const space = { ...spaceDefaults, ...(theme.space || {}) };
export const typography = {
  ...typographyDefaults,
  ...(theme.typography || {}),
};
export const global = { ...globalDefaults, ...(theme.global || {}) };

const extendedTheme = {
  colors,
  borders,
  layers,
  media,
  maxMedia,
  space,
  typography,
  global,
};

export default extendedTheme;
