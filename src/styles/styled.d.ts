// import original module declarations
import 'styled-components'
import { ThemeSpace } from './tokens/space'
import { ThemeColors } from './tokens/colors'
import { ThemeBorders } from './tokens/borders'
import { ThemeBorderRadii } from './tokens/borderRadii'
import { ThemeGradients } from './tokens/gradients'
import { ThemeIconSizes } from './tokens/iconSizes'
import { ThemeLayers } from './tokens/layers'
import { ThemeMedia } from './tokens/media'
import { ThemeGlobal } from './tokens/global'
import { ThemeTypography } from './tokens/typography'

declare module 'styled-components' {
  export interface Theme {
    global: ThemeGlobal
    typography: ThemeTypography
    colors: ThemeColors
    space: ThemeSpace
    layers: ThemeLayers
    media: ThemeMedia
    maxMedia: ThemeMedia
    borders: ThemeBorders
    borderRadii: ThemeBorderRadii
    gradients: ThemeGradients
    iconSizes: ThemeIconSizes
  }
}
