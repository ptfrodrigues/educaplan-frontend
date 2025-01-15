function parseHsl(hslString: string): [number, number, number] {
    const [h, s, l] = hslString.match(/\d+/g)!.map(Number);
    return [h, s, l];
  }
  
  export function adjustLightness(color: string, amount: number): string {
    const [h, s, l] = parseHsl(color);
    const newL = Math.max(0, Math.min(100, l + amount));
    return `hsl(${h}, ${s}%, ${newL}%)`;
  }
  
  export function buildColorVariants(baseColor: string): {
    default: string;
    hover: string;
    active: string;
  } {
    return {
      default: baseColor,
      hover: adjustLightness(baseColor, -5),
      active: adjustLightness(baseColor, -10),
    };
  }
  
  