import { theme } from './theme';
import { silent } from 'twind';
import typographyPlugin from 'windicss/plugin/typography';

export const config = {
  mode: silent,
  plugins: [typographyPlugin()],
  darkMode: 'class',
  theme,
};
