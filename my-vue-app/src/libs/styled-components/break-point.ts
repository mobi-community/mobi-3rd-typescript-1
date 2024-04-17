export type Breakpoints = "sm" | "md" | "lg";

export type BreakpointValues = {
  [key in Breakpoints]: string;
};

export const BREAK_POINT: BreakpointValues = {
  sm: "480px", // small
  md: "896px", // medium
  lg: "1152px", // large
};
