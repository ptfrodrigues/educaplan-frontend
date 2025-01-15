export const GOLDEN_RATIO = 1.618;
export const BASE_UNIT = 8; // 8px base unit

export const createModularScale = (base: number, ratio: number, steps: number) => {
  return Array.from({ length: steps }, (_, i) => 
    Math.round(base * Math.pow(ratio, i))
  );
};

export const modularScale = createModularScale(BASE_UNIT, GOLDEN_RATIO, 10);

