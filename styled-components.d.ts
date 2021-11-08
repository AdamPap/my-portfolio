import { theme } from "./style/theme.config";

// NOTE: how to get strongly typed theme
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
