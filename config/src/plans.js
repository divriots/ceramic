export default [
  {
    title: 'Free',
    legend: 'Open source and Prototyping',
    price: {
      value: '0',
      currency: 'USD',
      symbol: '$',
    },
    features: [
      {
        icon: '/assets/icons/check.svg',
        description: 'Full-featured IDE',
      },
      {
        icon: '/assets/icons/infinity.svg',
        description: 'Public components',
      },
      {
        icon: '/assets/icons/github.svg',
        description: 'Sync to Github and GitLab public repos',
      },
      {
        icon: '/assets/icons/npm.svg',
        description: 'Publish public packages under <code>@wcd</code> scope',
      },
      {
        icon: '/assets/logo/grey/discord.svg',
        description:
          "<a class='icon' href='https://discord.gg/z7JUzhn'>Community support</a>",
      },
    ],
    action: {
      label: 'Sign up',
      url: '/signup',
      type: 'outline',
    },
  },
  {
    title: 'Pro',
    price: {
      value: '29',
      symbol: '$',
      currency: 'USD',
      unit: 'Editor',
    },
    includes: 'All Free features',
    features: [
      {
        icon: '/assets/icons/infinity.svg',
        description: 'Private component',
      },
      {
        icon: '/assets/icons/npm.svg',
        description: 'Publish public packages under your name or your scope',
      },
      {
        icon: '/assets/icons/check.svg',
        description:
          "Badge <span class='badge bg-accent text-white'>ENTHUSIAST</span>",
      },
    ],
    action: {
      label: 'Subscribe',
      url: '/signup/ENTHUSIAST',
      type: 'primary',
    },
  },
  {
    title: 'Enterprise',
    includes: 'All pro features',
    features: [
      {
        icon: '/assets/icons/github.svg',
        description: 'Sync to Github and GitLab private repos',
      },
      {
        icon: '/assets/icons/npm.svg',
        description: 'Publish private packages',
      },
      {
        icon: '/assets/icons/check.svg',
        description: 'Publish to any registry',
      },
      {
        icon: '/assets/icons/pro-support.svg',
        description: 'Email support',
      },
      {
        icon: '/assets/icons/check.svg',
        description:
          "Badge <span class='badge bg-accent text-white'>PRO</span>",
      },
    ],
    price: {
      value: 'On Demand',
    },
    action: {
      label: 'Contact us',
      url: '#',
      type: 'primary',
    },
  },
];
