import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import breakpoints from './breakpoints';
import components from './components';

export type Theme = {
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
  components: typeof components;
};
