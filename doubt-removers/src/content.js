export default {
  data: {
    classes: 'text-quaternary',
    title: 'Integrates into <span class="text-quaternary">your workflow</span>',
    promises: [
      {
        title: 'Works with your IDE too',
        description: `Backlight comes with an integrated online IDE highly-inspired
        by VSCode but you can use your preferred IDE locally.`,
        img: {
          src: `<svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill='#01a7ec'
            >
              <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" />
            </svg>`,
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
          src: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='#01a7ec'><path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/></svg>
`,
        },
        // action: {
        //   label: 'Foo',
        //   url: '#',
        // },
      },
      {
        title: 'Publish npm packages',
        description: `design systems are compiled, packaged and versioned on demand. 
        Packages can be delivered to any npm registry like npmjs.org or GitHub packages.`,
        img: {
          src: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill='#01a7ec'><path fill-rule="evenodd" clip-rule="evenodd" d="M8.61 3l5.74 1.53L15 5v6.74l-.37.48-6.13 1.69-6.14-1.69-.36-.48V5l.61-.47L8.34 3h.27zm-.09 1l-4 1 .55.2 3.43.9 3-.81.95-.29-3.93-1zM3 11.36l5 1.37V7L3 5.66v5.7zM9 7v5.73l5-1.37V5.63l-2.02.553V8.75l-1 .26V6.457L9 7z"/></svg>
`,
        },
        // action: {
        //   label: 'Bar',
        //   url: '#',
        // },
      },
      {
        title: 'No lock-in',
        description: `Backlight promote 100% standard web development technologies. 
        You are always free to eject your design system and continue outside of Backlight.`,
        img: {
          src: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill='#01a7ec'><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7V5a3 3 0 0 1 5.83-1h1.044A4.002 4.002 0 0 0 4 5v2H3L2 8v6l1 1h10l1-1V8l-1-1H5zm6 1h2v6H3V8h8z"/></svg>
`,
        },
        // action: {
        //   label: 'Bar',
        //   url: '#',
        // },
      },
    ],
  },
};
