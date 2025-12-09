import { colors, IdleThemes } from "./colors";

export interface GetThemeOptions {
  color: "light" | "dark";
  name: string;
}

function toArray<T>(array: T | T[]): T[] {
  return Array.isArray(array) ? array : [array];
}

function getColors(style: "light" | "dark"): typeof colors {
  if (style === "dark") {
    const darkColors: Record<string, unknown> = {};
    Object.entries(colors).forEach(([name, val]) => {
      if (name === "black") darkColors.white = val;
      else if (name === "white") darkColors.black = val;
      else darkColors[name] = [...toArray(val)].reverse();
    });
    return darkColors as typeof colors;
  } else {
    return colors;
  }
}

export function createThemeHelpers({ color }: GetThemeOptions) {
  const pick = (options: { light?: string; dark?: string }) => options[color];

  const v = (key: keyof typeof IdleThemes, op = "") => {
    let obj = IdleThemes[key];
    if (typeof obj === "string") obj = [obj, obj];
    return pick({ light: obj[1] + op, dark: obj[0] + op });
  };

  const colors = getColors(color);

  return {
    pick,
    colors,
    v,
  };
}
