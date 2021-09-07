const imgLanding = (asset) => `https://backlight.dev/img/landing/${asset}`;

export default {
  data: {
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
        <p>Push changes on branches and review pull-Requests easily.</p>`,
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
        description: `<p>Backlight promote 100% standard web development technologies.</p>
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
};
