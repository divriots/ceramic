import { colors } from '../../colors/src/index';
import { dropbox } from './commons';
const { orange, blue, green } = colors.colors;

export default [
  {
    title: '<em>powered by Design System',
    promises: [
      {
        title: 'Build source-of-truth for your Front-end',
        description: `<p>Backlight helps you consolidate your Design System, from tokens to complex components.</p><p>
Standardize and share a common design language within all developers and designers.</p>`,
        img: {
          src: dropbox('promise_1_1.png'),
          backgroundColor: orange,
        },
        action: {
          label: 'Discover',
          url: '#',
        },
      },
      {
        title: 'Documentation as you go',
        description: `<p>Backlight makes it seamless for designers and developers to build the documentation of your Design System.</p><p>
Automatically versioned as you release</p>`,
        img: {
          src: dropbox('promise_1_2.png'),
          backgroundColor: orange,
        },
        action: {
          label: 'Start',
          url: '#',
        },
      },
    ],
  },
  {
    title: 'Design together',
    promises: [
      {
        title: `Collaborate on the fly`,
        description: `<p>Share real-time preview of components in-browser.</p><p>
        Collaboration has never been so smooth within your front-end team.</p><p>
The hand-over between developers and designers is almost an old story.</p>`,
        img: {
          src: dropbox('promise_2_1.png'),
          backgroundColor: blue,
        },
        action: {
          label: 'View documentation',
          url: '#',
        },
      },
      {
        title: `Integrates into your workflow seamlessly`,
        description: `<p>Publish your Design System in one click.</p><p> 
        Connect and commit to your favorite Git provider.</p><p> 
        Your components are always up-to-date ! No more hassle to track inconsistency in your code.</p>`,
        img: {
          src: dropbox('promise_2_2.png'),
          backgroundColor: blue,
        },
        action: {
          label: 'Ask a demo',
          url: '#',
        },
      },
    ],
  },
  {
    title: 'Develop anywhere, anytime',
    promises: [
      {
        title: 'Review instantly',
        description: `<p>Compare visually with live diff preview.</p><p> 
        Forget build and deploy time. Save precious hours.</p><p> 
Parallel viewports preview (desktop, tablet, mobile).</p>`,
        img: {
          src: dropbox('promise_3_1.png'),
          backgroundColor: green,
        },
        action: {
          label: 'Start',
          url: '#',
        },
      },
      {
        title: 'Code in the browser or with your favorite editor',
        description: `<p>Backlight is open and flexible.</p><p>
          Use your favorite IDE or our built-in editor to contribute instantly.</p>`,
        img: {
          src: dropbox('promise_3_2.png'),
          backgroundColor: green,
        },
        action: {
          label: 'Discover pricing',
          url: '#',
        },
      },
      {
        title: 'No <string> attached',
        description: `<p>Export your Design System in a few clicks.</p><p>
We love you, so you are free to go any time!</p>`,
        img: {
          src: dropbox('promise_3_3.png'),
          backgroundColor: green,
        },
        action: {
          label: 'Start',
          url: '#',
        },
      },
    ],
  },
];
