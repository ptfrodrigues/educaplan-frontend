import { modularScale } from '../utils/modular-scale';

export const borderRadius = {
    none: '0',
    sm: `${modularScale[0]}px`,    // 8px
    md: `${modularScale[1]}px`,    // 13px
    lg: `${modularScale[2]}px`,    // 21px
    full: '9999px',
  };
  