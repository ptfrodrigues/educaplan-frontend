type NestedObject = { [key: string]: string | number | NestedObject };

function flattenObject(obj: NestedObject, prefix = ''): Record<string, string | number> {
  return Object.keys(obj).reduce((acc: Record<string, string | number>, k: string) => {
    const pre = prefix.length ? `${prefix}-` : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject(obj[k] as NestedObject, `${pre}${k}`));
    } else {
      acc[`${pre}${k}`] = obj[k] as string | number;
    }
    return acc;
  }, {});
}

export function tokenToCss(tokens: Record<string, NestedObject>): string {
  let cssVariables = ':root {\n';

  Object.entries(tokens).forEach(([tokenName, tokenValues]) => {
    const flattenedTokens = flattenObject(tokenValues);
    Object.entries(flattenedTokens).forEach(([key, value]) => {
      cssVariables += `  --${tokenName}-${key}: ${value};\n`;
    });
  });

  cssVariables += '}\n';
  return cssVariables;
}

