const imgLanding = (asset) => `https://backlight.dev/img/landing/${asset}?v1`;

export default [
  {
    classes: 'text-primary',
    title: '<span class="text-secondary">All-in-one</span> design system tool',
    layout: 'vertical',
    promises: [
      // {
      //   title: 'Visual component library',
      //   description: `<p>From design tokens to complex components,
      //   everything is in one place, visually accessible by anyone.</p>
      //   <p>Developers and designers can work together on the design system code-side.</p>`,
      //   img: {
      //     src: imgLanding('promise_visual.webp'),
      //   },
      //   // action: {
      //   //   label: 'Look at one of the starter-kits',
      //   //   url: '/starterkits',
      //   // },
      // },
      {
        title: 'Code and preview',
        description: `<p>Your component library is visually organized.
        It's easy for anyone to discover the component catalog and contribute
        to the design system right away.</p>`,
        img: {
          src: imgLanding('code-and-stories.webp'),
        },
        // action: {
        //   label: 'Look at one of the starter-kits',
        //   url: '/starterkits',
        // },
      },
      {
        title: 'Storybook stories',
        description: `<p>Backlight support Storybook stories out-of-the-box. Display your stories next to your code for perfect Developers / Designers alignment.</p>`,
        img: {
          src: imgLanding('storybook_integration.webp'),
        },
        // action: {
        //   label: 'Look at one of the starter-kits',
        //   url: '/starterkits',
        // },
      },
      {
        title: 'Live documentation',
        description: `<p>Create a live design system documentation. Showcase the components directly in the documentation, with playgrounds, properties and events directly from code.</p>
        <p>Everyone can contribute directly to documentation with instant online preview.</p>
        <p>Backlight has built-in support for Markdown, MDX, MD Vue, and Nunjucks for documentation.</p>`,
        img: {
          src: imgLanding('referencesite.webp'),
        },
        // action: {
        //   label: 'Reference site demo',
        //   url: '#',
        // },
      },
      {
        title: 'Design integration',
        description: `<p>Keep the preview of the design next to the components. Streamline collaboration between developers and designers.</p>
        <p>Figma, Sketch and Adobe Xd supported.</p>`,
        img: {
          src: imgLanding('designlink.webp'),
        },
        // action: {
        //   label: 'Reference site demo',
        //   url: '#',
        // },
      },
      {
        title: 'Unit tests',
        description: `<p>Create and run test sets. Ensure quality and accessibility over time.</p>
        <p>Backlight has a built-in test runner and reporter for effortless test checks and contributions.</p>`,
        img: {
          src: imgLanding('tests.webp'),
        },
        // action: {
        //   label: 'Look at one of the starter-kits',
        //   url: '/starterkits',
        // },
      },
    ],
  },
  {
    classes: 'text-tertiary',
    title: 'A true <span class="text-tertiary">collaborative space</span>',
    layout: 'horizontal',
    promises: [
      {
        title: `Get feedback in one click`,
        description: `<p>Share real-time previews of the component you are working on.</p>
        <p>Speed-up pipeline. No need to push, release or deploy anything. Just share a link to your team
        to show what you are working on.</p>
        <p>Don't wait the end of the sprint to get feedback, collaborate more.</p>`,
        video: {
          src: imgLanding('collaborate.mp4'),
        },
        // action: {
        //   label: 'Foo',
        //   url: '#',
        // },
      },
      {
        title: 'Pull-requests visual review',
        description: `<p>Reviewing HTML, CSS and JavaScript code doesn't tell
        the full picture.</p>
        <p>Backlight renders pull-request instantly for fast visual review. You don't need to wait for the build task or the deploy task.</p>
        <p>Review better in less time.</p>`,
        img: {
          src: imgLanding('diff.gif'),
        },
        // action: {
        //   label: 'Bar',
        //   url: '#',
        // },
      },
    ],
  },
];
