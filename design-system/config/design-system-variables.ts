import { tokenToCss } from '../utils'
import { defaultTheme, darkTheme } from '../themes'

export const designSystemVariables = {
  default: tokenToCss(defaultTheme),
  dark: tokenToCss(darkTheme),
}

