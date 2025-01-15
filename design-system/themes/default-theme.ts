import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { sizes } from '../tokens/sizes';
import { typography } from '../tokens/typography';
import { borderRadius } from '../tokens/border-radius';
import { components } from '../tokens/components';
import { buildColorVariants } from '../utils/color-utils';

export const defaultTheme = {
  colors: {
    ...colors,
    // Semantic color definitions
    primary: buildColorVariants(colors.azure[600]),
    secondary: buildColorVariants(colors.sage[600]),
    neutral: colors.stone[500],
    accent: buildColorVariants(colors.amber[500]),
    success: buildColorVariants(colors.emerald[500]),
    warning: buildColorVariants(colors.gold[500]),
    error: buildColorVariants(colors.crimson[500]),
    background: colors.white,
    text: buildColorVariants(colors.stone[900]),
  },
  spacing,
  sizes,
  typography,
  borderRadius,
  components,
};

export type Theme = typeof defaultTheme;

