const imgLanding = (asset) => `https://backlight.dev/img/landing/${asset}`;

export default [
  {
    classes: 'text-primary',
    title: 'Everything in <span class="text-secondary">one place</span>',
    promises: [
      // {
      //   title: 'Visual component library',
      //   description: `<p>From design tokens to complex components,
      //   everything is in one place, visually accessible by anyone.</p>
      //   <p>Developers and designers can work together on the Design System code-side.</p>`,
      //   img: {
      //     src: imgLanding('promise_visual.png'),
      //   },
      //   // action: {
      //   //   label: 'Look at one of the starter-kits',
      //   //   url: '/starterkits',
      //   // },
      // },
      {
        title: 'Code and stories',
        description: `<p>Your component library is visually organized.
        It's easy for anyone to discover the component catalog and contribute
        to the Design System right away.</p>
        <p>Storybook stories (CSF) are supported out-the-box.</p>`,
        img: {
          src: imgLanding('code-and-stories.png'),
        },
        // action: {
        //   label: 'Look at one of the starter-kits',
        //   url: '/starterkits',
        // },
      },
      {
        title: 'Documentation aka reference site',
        description: `<p>Reference sites are online documentation of your
        Design System including component description, rules and guidelines.</p>
        <p>Backlight has built-in support for Markdown and MDX documentation.</p>
        <p>Everybody can contribute directly with the WYSIWYG online editor.</p>`,
        img: {
          src: imgLanding('referencesite.gif'),
        },
        // action: {
        //   label: 'Reference site demo',
        //   url: '#',
        // },
      },
      {
        title: 'Design links',
        description: `<p>Keep the preview of the design next to the components.</p>
        <p>Figma and Adobe Xd links supported.</p>`,
        img: {
          src: imgLanding('designlink.png'),
        },
        // action: {
        //   label: 'Reference site demo',
        //   url: '#',
        // },
      },
      {
        title: 'Unit tests',
        description: `<p>Reproduce bugs. Ensure accessibility over time. Automate event checks...</p>
        <p>Backlight has a built-in test runner and reporter for effortless test checks and contributions.</p>`,
        img: {
          src: imgLanding('tests.png'),
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
    promises: [
      {
        title: `Get feedback in one click`,
        description: `<p>Share real-time previews of the component you are working on.</p>
        <p>No need to push, release or deploy anything. Just share a link to your team
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
        title: 'Review pull-Requests visually',
        description: `<p>Reviewing HTML, CSS and JavaScript code doesn't tell
        the full picture.</p>
        <p>Backlight renders pull-request instantly so you can review them
        graphically. You don't need to wait for the build task or the deploy task.</p>
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
