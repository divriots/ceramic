const assetRef = (asset) =>
  new URL(asset, 'https://design-systems.dev/assets/').href;

const integrations = [
  {
    name: 'git',
    logo: assetRef('logo/git.svg'),
  },
  {
    name: 'github',
    logo: assetRef('logo/github.svg'),
  },
  {
    name: 'gitlab',
    logo: assetRef('logo/gitlab.svg'),
  },
  {
    name: 'npm',
    logo: assetRef('logo/npm.svg'),
  },
  {
    name: 'netlify',
    logo: assetRef('logo/netlify.svg'),
  },
  {
    name: 'storybook',
    logo: assetRef('logo/storybook.svg'),
  },
];

const languages = [
  {
    name: 'typescript',
    logo: assetRef('lang/ts.svg'),
  },
  {
    name: 'less',
    logo: assetRef('lang/less.svg'),
  },
  {
    name: 'sass',
    logo: assetRef('lang/sass.svg'),
  },
  {
    name: 'markdown',
    logo: assetRef('lang/markdown.svg'),
  },
  {
    name: 'wasm',
    logo: assetRef('lang/wasm.svg'),
  },
];

const compilers = [
  {
    name: 'svelte',
    logo: assetRef('lib/svelte.svg'),
  },
  {
    name: 'stencil',
    logo: assetRef('lib/stencil.svg'),
  },
  {
    name: 'lwc',
    logo: assetRef('lib/lwc.svg'),
  },
  {
    name: 'angular',
    logo: assetRef('lib/angular.svg'),
  },
  {
    name: 'riotjs',
    logo: assetRef('lib/riotjs.svg'),
  },
];

const libraries = [
  {
    name: 'lit',
    logo: assetRef('lib/lit.svg'),
  },
  {
    name: 'preact',
    logo: assetRef('lib/preact.svg'),
  },
  {
    name: 'react',
    logo: assetRef('lib/react.svg'),
  },
];

export default [...integrations, ...compilers, ...libraries, ...languages];
