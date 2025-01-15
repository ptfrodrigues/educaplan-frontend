import { colors, spacing, sizes, typography, components, borderRadius } from '../tokens'

export const designSystemConfig = {
  theme: {
    colors,
    spacing,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    borderRadius,
    extend: {
      fontFamily: typography.fontFamily,
      ...components,
      ...sizes
    },
  },
}