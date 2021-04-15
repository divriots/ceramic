import { setup as setupTwind } from 'twind/shim';
import { config } from './config';
import { silent } from 'twind';
import typographyPlugin from 'windicss/plugin/typography';
import resolveConfig from 'tailwindcss/resolveConfig';

export const resolvedConfig = resolveConfig({
  mode: silent,
  plugins: [typographyPlugin()],
  ...config,
});

export const setup = () => setupTwind(resolvedConfig as any);
