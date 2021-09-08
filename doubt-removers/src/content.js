const imgLanding = (asset) => `https://backlight.dev/img/landing/${asset}`;

const file = (asset) => `./${asset}`;

export default {
  data: {
    classes: 'text-quaternary',
    title: 'Integrates into <span class="text-quaternary">your workflow</span>',
    promises: [
      {
        title: 'Works with your IDE too',
        description: `Backlight comes with an integrated online IDE highly-inspired
        by VSCode but you can use your prefered IDE locally.`,
        img: {
          src: file('files.svg'),
        },
        // action: {
        //   label: 'Try now',
        //   url: '/get-started',
        // },
      },
      {
        title: 'Connects to your Git repository',
        description: `Backlight supports GitHub and Gitlab (BitBucket coming soon). 
        Push changes on branches and review pull-Requests easily.`,
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
        description: `Design Systems are compiled, packaged and versioned on demand. 
        Packages can be delivered to any npm registry like npmjs.org or GitHub packages.`,
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
        description: `Backlight promote 100% standard web development technologies. 
        You are always free to eject your Design System and continue outside of Backlight.`,
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
