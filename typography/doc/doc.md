```js script
import { theme } from '~/tailwind';
import '@divriots/dockit-core/tailwind-showcases';
import '@divriots/dockit-core/style.css';
import { html } from 'lit';
import '~/tailwind';
```

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">

<style>
:root {
  font-family: 'Space Grotesk'!important;
}
</style>

# Font Family

```html:html
<dockit-tailwind-showcases
showcase-key="fontFamily"
.theme=${theme}>
</dockit-tailwind-showcases>
```

# Font Size

```html:html
<dockit-tailwind-showcases
showcase-key="fontSize"
.theme=${theme}>
</dockit-tailwind-showcases>
```

# Font Weight

```html:html
<dockit-tailwind-showcases
showcase-key="fontWeight"
.theme=${theme}>
</dockit-tailwind-showcases>
```

# Letter Spacing

```html:html
<dockit-tailwind-showcases
showcase-key="letterSpacing"
.theme=${theme}>
</dockit-tailwind-showcases>
```

# Line Height

```html:html
<dockit-tailwind-showcases
showcase-key="lineHeight"
long-text="true"
.theme=${theme}>
</dockit-tailwind-showcases>
```
