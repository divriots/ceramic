import resolveConfig from 'tailwindcss/resolveConfig';
import { partialTheme } from './partial-theme';
import { setup } from './setup';

setup();
export const { theme } = resolveConfig({ theme: partialTheme });
