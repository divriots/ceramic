import merge from 'deepmerge';

import { typography } from '~/typography';
import { colors } from '~/colors';
import { border } from '~/border';
import { opacity } from '~/opacity';
import { shadows } from '~/shadows';
import { spacing } from '~/spacing';
import { zIndex } from '~/z-index';

const typographyExtension = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          maxWidth: '65ch',
          color: 'inherit',
          a: {
            color: 'inherit',
            opacity: 0.75,
            fontWeight: '500',
            textDecoration: 'underline',
            '&:hover': {
              opacity: 1,
              color: colors.primary,
            },
          },
          b: {
            color: 'inherit',
          },
          strong: {
            color: 'inherit',
          },
          em: {
            color: 'inherit',
          },
          h1: {
            color: 'inherit',
          },
          h2: {
            color: 'inherit',
          },
          h3: {
            color: 'inherit',
          },
          h4: {
            color: 'inherit',
          },
          code: {
            color: 'inherit',
          },
        },
      },
    },
  },
};

export const partialTheme = merge.all([
  colors,
  typography,
  border,
  opacity,
  shadows,
  spacing,
  zIndex,
  typographyExtension,
]);
