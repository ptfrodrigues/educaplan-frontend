import { defaultTheme, Theme } from './default-theme';
import { colors } from '../tokens/colors';
import { buildColorVariants } from '../utils/color-utils';

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: buildColorVariants(colors.azure[400]),
    secondary: buildColorVariants(colors.sage[400]),
    neutral: colors.stone[400],
    accent: buildColorVariants(colors.amber[400]),
    success: buildColorVariants(colors.emerald[400]),
    warning: buildColorVariants(colors.gold[400]),
    error: buildColorVariants(colors.crimson[400]),
    background: colors.stone[900],
    text: buildColorVariants(colors.stone[100]),
  },
};

