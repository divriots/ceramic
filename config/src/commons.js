export const dropbox = (asset) =>
  new URL(asset, 'https://dl.dropboxusercontent.com/s/j2t4i1v6wfizmr6/').href;

export const assetRef = (asset) =>
  new URL(asset, 'https://backlight.dev/assets/').href;
