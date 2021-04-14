import { silent } from 'twind';
import { setup as setupTwind } from 'twind/shim';
import typography from 'windicss/plugin/typography';
import { partialTheme } from './partial-theme';

export const setup = () =>
  setupTwind({
    darkMode: 'class',
    mode: silent,
    theme: partialTheme,
    plugins: typography(),
  });
