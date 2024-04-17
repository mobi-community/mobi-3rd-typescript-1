type ColorPalette = {
  base: string;
  light?: string;
  weight?: string;
};

type ColorTheme = {
  error: string;
  alert: string;
  success: string;
};

type Theme = {
  SYSTEM: ColorTheme;
  MAIN: { [key: string]: string };
  SUB: { [key: string]: string };
  COMMON: { [key: string]: string };
  PALETTE: { [key: string]: ColorPalette };
};

const SYSTEM = {
  error: "#DE1F32",
  alert: "#DE5D1F",
  success: "#2E40E0",
};
const MAIN = {
  base: "#135D66", // 400 과 동일값
  0: "#E3FEF7",
  200: "#77B0AA",
  400: "#13665C",
  600: "#135D66",
  800: "#003C43",
  1000: "##133B66",
  // 1000: "#112C66",
};
const SUB = {
  base: "#F0DBAF", // 400 과 동일값
  0: "#FDF7E4",
  200: "#FAEED1",
  400: "#F0DBAF",
  600: "#DED0B6",
  800: "#BBAB8C",
  1000: "#B0A695",
};
const COMMON = {
  0: "#000000",
  200: "#363636",
  400: "#6F6F6F",
  600: "#A8A8A8",
  800: "#D8D8D8",
  900: "#F1F1F1",
  1000: "#FFFFFF",
};
const PALETTE = {
  magenta: {
    base: "#C51605",
    light: "#E06469",
    weight: "#A73121",
  },
  orange: {
    base: "#EC9B3B",
    light: "#FAC213",
    weight: "#F77E21",
  },
  yellow: {
    base: "#FFF323",
    light: "#FFF7AE",
    weight: "#FFD32D",
  },
  mint: {
    base: "#A0E4CB",
    light: "#CFF5E7",
    weight: "#59C1BD",
  },
  cyan: {
    base: "#87C4FF",
    light: "#E0F4FF",
    weight: "#39A7FF",
  },
  purple: {
    base: "#C9A7EB",
    light: "#ECC9EE",
    weight: "#9384D1",
  },
};

export const COLOR: Theme = {
  SYSTEM,
  MAIN,
  SUB,
  COMMON,
  PALETTE,
};
