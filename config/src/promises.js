import { colors } from '../../colors/src/index';
import { dropbox } from './commons';
const { orange, blue, green } = colors.colors;

const imgLanding = (asset) => `https://backlight.dev/landing/${asset}`;

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
        title: 'Reference site out-of-the-box',
        description: `<p>Built-in Markdown and MDX for documenting your components.</p>
        <p>No need for change request tickets, everybody can contribute directly with the WYSIWYG online editor.</p>
        <p>The reference site always has the exact component in the rigth version with no additional efforts.</p>`,
        img: {
          src: imgLanding('promise_refsite.png'),
        },
        action: {
          label: 'Reference site demo',
          url: '#',
        },
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
        <p>No need to push, release or deploy anything. Just share a link to your team,
        even when coding from your local environment.</p>
        <p>Don't wait the end of the sprint to get feedback, collaborate more.</p>`,
        img: {
          src: imgLanding('promise_feedback.png'),
        },
        action: {
          label: 'Foo',
          url: '#',
        },
      },
      {
        title: 'Review Pull-Requests visually',
        description: `<p>No need to wait for the branch to be built and deployed.</p>
        <p>Pull-Requests are visually reviewable instantly.</p>
        <p>Review more in less time.</p>`,
        img: {
          src: imgLanding('promise_pr.png'),
        },
        action: {
          label: 'Bar',
          url: '#',
        },
      },
    ],
  },
  {
    classes: 'text-quaternary',
    title: 'Integrates into <span class="text-quaternary">your workflow</span>',
    promises: [
      {
        title: 'Bring-your-own IDE',
        description: `<p>Backlight comes with an integrated online IDE inpired
        by VSCode but you can use your prefered IDE locally on</p><p>
          Use your favorite IDE or our built-in editor to contribute instantly.</p>`,
        img: {
          src: imgLanding('promise_ide.png'),
        },
        action: {
          label: 'Discover pricing',
          url: '#',
        },
      },
      {
        title: 'Connects to your Git repository',
        description: `<p>Supports GitHub and Gitlab (BitBucket coming soon).</p>
        <p>Push changes on branches and review Pull-Requests easily.</p>`,
        img: {
          src: imgLanding('promise_git.png'),
        },
        action: {
          label: 'Foo',
          url: '#',
        },
      },
      {
        title: 'Publish npm packages',
        description: `<p>Design Systems are compiled, packaged and versioned on demand.</p>
        <p>They can be delivered to any npm registry like npmjs.org or GitHub packages.</p>`,
        img: {
          src: imgLanding('promise_npm.png'),
        },
        action: {
          label: 'Bar',
          url: '#',
        },
      },
    ],
  },
];
