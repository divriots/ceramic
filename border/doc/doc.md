```js script
import { partialTheme } from '~/tailwind';
import '@divriots/dockit-core/tailwind-showcases';
import { html } from 'lit-html';
```

# Border Radius

```html:html
<dockit-tailwind-showcases
showcase-key="borderRadius"
component-class="shadow-xl h-24 w-24 bg-primary"
.theme=${partialTheme}>
</dockit-tailwind-showcases>
```

# Border Width

```html:html
<dockit-tailwind-showcases
showcase-key="borderWidth"
component-class="shadow-xl h-24 w-24 border-4 rounded-sm"
checkered-background="false"
.theme=${partialTheme}>
</dockit-tailwind-showcases>
```
