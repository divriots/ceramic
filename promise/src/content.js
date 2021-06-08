
const imgLanding = (asset) => `https://backlight.dev/img/landing/${asset}`;

export default [
  {
    classes: 'text-secondary',
    title: 'Everything in <span class="text-secondary">one place</span>',
    promises: [
      {
        title: 'Visual component library',
        description: `<p>From design tokens to complex components, 
        everything is in one place, visually accessible by anyone.</p>
        <p>Developers and designers can work together on the Design System code-side.</p>`,
        img: {
          src: imgLanding('promise_visual.png'),
        },
        action: {
          label: 'Look at one of the starter-kits',
          url: '/starterkits',
        },
      },
      {
        title: 'Reference site',
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
    ],
  },
  {
    classes: 'text-tertiary',
    title: 'A true <span class="text-tertiary">collaborative space</span>',
    promises: [
      {
        title: `Get feedback in one click`,
        description: `<p>Share real-time previews of the component your are working on.</p>
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
        title: 'Review Pull-Requests visually',
        description: `<p>Reviewing HTML, CSS and JavaScript code doesn't tell
        the full picture.</p>
        <p>Backlight renders Pull-request instantly so you can review them
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
  {
    classes: 'text-quaternary',
    title: 'Integrates into <span class="text-quaternary">your workflow</span>',
    promises: [
      {
        title: 'Works with your IDE too',
        description: `<p>Backlight comes with an integrated online IDE highly-inspired
        by VSCode but you can use your prefered IDE locally.</p>`,
        img: {
          src: imgLanding('ides.png'),
        },
        // action: {
        //   label: 'Try now',
        //   url: '/get-started',
        // },
      },
      {
        title: 'Connects to your Git repository',
        description: `<p>Backlight supports GitHub and Gitlab (BitBucket coming soon).</p>
        <p>Push changes on branches and review Pull-Requests easily.</p>`,
        img: {
          src: imgLanding('git.png'),
        },
        // action: {
        //   label: 'Foo',
        //   url: '#',
        // },
      },
      {
        title: 'Publish npm packages',
        description: `<p>Design Systems are compiled, packaged and versioned on demand.</p>
        <p>Packages can be delivered to any npm registry like npmjs.org or GitHub packages.</p>`,
        img: {
          src: imgLanding('npm.png'),
        },
        // action: {
        //   label: 'Bar',
        //   url: '#',
        // },
      },
      {
        title: 'No lock-in',
        description: `<p>Backlight promote 100% standard Web development technologies.</p>
        <p>You are always free to eject your Design System and continue outside of Backlight.</p>`,
        img: {
          src: imgLanding('nolockin.gif'),
        },
        // action: {
        //   label: 'Bar',
        //   url: '#',
        // },
      },
    ],
  },
];
