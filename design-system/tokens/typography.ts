import { modularScale } from '../utils/modular-scale';

export const typography = {
  fontFamily: {
    sans: 'var(--font-sans, "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")',
    mono: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
  },
  fontSize: {
    sm: `${modularScale[0]}px`,     // 8px
    base: `${modularScale[1]}px`,     // 13px
    medium: `${modularScale[2]}px`,   // 21px
    lg: `${modularScale[3]}px`,     // 34px
    xl: `${modularScale[4]}px`,     // 55px
    '2xl': `${modularScale[5]}px`,  // 89px
    '3xl': `${modularScale[6]}px`,  // 144px
    '4xl': `${modularScale[7]}px`,  // 233px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

