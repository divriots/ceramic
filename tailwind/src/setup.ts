import { setup as setupTwind } from 'twind/shim';
import resolveConfig from 'tailwindcss/resolveConfig';
import { config } from './config';

export const setup = () => setupTwind(config);
setup(); // this must be called until we have a provider

export const resolvedConfig = resolveConfig(config);
