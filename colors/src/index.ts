import twcolors from 'tailwindcss/colors';

export const colors = {
  colors: {
    transparent: '#00000000',
    primary: '#f8c307',
    secondary: '#008594',
    tertiary: '#ff3660',
    quaternary: '#01a7ec',
    white: '#FFFFFF',
    black: {
      default: twcolors.black,
      divriots: twcolors.trueGray['900'],
    },
    gray: {
      darker: '#262628',
      dark: '#4d4d4f',
      mid: '#737375',
      light: '#99999B',
      divriots: twcolors.coolGray['100'],
    },
    orange: '#FF9423',
    blue: '#1891FF',
    green: '#21D3B0',
    teal: {
      light: twcolors.teal[200],
      mid: twcolors.teal[500],
      dark: twcolors.teal[800],
    },
    background: twcolors.coolGray['100'],
    inherit: 'inherit',
  },
};
