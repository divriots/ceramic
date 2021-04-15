```js script
import { theme as partialTheme } from '~/tailwind';
import '@divriots/dockit-core/tailwind-showcases';
import { html } from 'lit-html';
```

# Background Color

```html:html
<dockit-tailwind-showcases
showcase-key="backgroundColor"
component-class="shadow-xl h-24 w-24 rounded-sm"
.theme=${partialTheme}>
</dockit-tailwind-showcases>
```

# Border Color

```html:html
<dockit-tailwind-showcases
showcase-key="borderColor"
component-class="shadow-xl h-24 w-24 border-4 rounded-sm"
checkered-background="false"
.theme=${partialTheme}>
</dockit-tailwind-showcases>
```

# Text Color

```html:html
<dockit-tailwind-showcases
showcase-key="textColor"
.theme=${partialTheme}>
</dockit-tailwind-showcases>
```
