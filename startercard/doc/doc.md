---
title: Testing components in doc
---

```js script
import StarterCard from '../src/StarterCard.vue';
// import Layout from '../../layout/src/Layout.vue';
// import { html } from 'lit-html';

// export default {
//   htmlParser: html,
//   layout: (content, context) => ({
//     components: { Layout },
//     template: `<Layout :content="content" :context="context">`,
//     setup() {
//       return { content, context };
//     },
//   }),
// };
```

## js story

```js story
export const jsStoryButton = () =>
  '<button class="bg-secondary text-white font-bold py-2 px-4 rounded">Button</button>';
```

## js preview-story

```js preview-story
export const jsPreviewStoryButton = () =>
  '<button class="bg-primary text-white font-bold py-2 px-4 rounded">Button</button>';
```

## html story

```html story
<button class="bg-secondary text-white font-bold py-2 px-4 rounded">
  Button
</button>
```

## html preview-story

```html preview-story
<button class="bg-primary text-white font-bold py-2 px-4 rounded">
  Blablabla
</button>
```
