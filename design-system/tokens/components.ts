import { spacing } from './spacing';

export const components = {
  button: {
    padding: {
      x: spacing[3],
      y: spacing[2],
    },
    borderRadius: 'var(--radius)',
  },
  input: {
    height: spacing[4],
    padding: {
      x: spacing[2],
      y: spacing[1],
    },
    borderRadius: 'var(--radius)',
  },
  card: {
    padding: spacing[4],
    borderRadius: 'var(--radius)',
  },
  sidebar: {
    width: {
      sm: spacing[6],
      md: spacing[7],
      lg: spacing[8],
    },
  },
};

