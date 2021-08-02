```js script
import { theme } from '~/tailwind';
import '@divriots/dockit-core/tailwind-showcases';
import { html } from 'lit-html';
import '~/tailwind/src/styles.css';
```

# Border Radius

```html:html
<dockit-tailwind-showcases
showcase-key="borderRadius"
component-class="shadow-xl h-24 w-24 bg-primary"
.theme=${theme}>
</dockit-tailwind-showcases>
```

# Border Width

```html:html
<dockit-tailwind-showcases
showcase-key="borderWidth"
component-class="shadow-xl h-24 w-24 rounded-sm"
checkered-background="false"
.theme=${theme}>
</dockit-tailwind-showcases>
```
