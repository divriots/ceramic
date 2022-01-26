export const groups = {
  collaboration: 'Collaboration',
  source_control: 'Source control',
  package_registry: 'Package registry',
  support: 'Support',
  premium: 'Premium',
};

export const features = {
  users: {
    group: groups.collaboration,
    label: 'Users',
  },
  projects: {
    group: groups.collaboration,
    label: 'Design Systems',
    labelSingular: 'Design System',
  },
  editor: {
    group: groups.collaboration,
    label: 'Command-line and online-IDE',
  },
  share: {
    group: groups.collaboration,
    label: 'Instand share',
  },
  preview: {
    group: groups.source_control,
    label: 'Pull Requests Visual review',
  },
  github: {
    group: groups.source_control,
    label: 'Github integration',
  },
  gitlab: {
    group: groups.source_control,
    label: 'Gitlab integration',
  },
  bitbucket: {
    group: groups.source_control,
    label: 'BitBucket (coming soon)',
  },
  publish_public: {
    group: groups.package_registry,
    label: 'Publish NPM @backlight-dev',
  },
  publish_custom_registry: {
    group: groups.package_registry,
    label: 'Publish to any package registry',
  },
  publish_private: {
    group: groups.package_registry,
    label: 'Publish private/public packages',
  },
  support_community: {
    group: groups.support,
    label: `<a class='icon' href='https://discord.gg/z7JUzhn' target="_blank">Community support</a>`,
  },
  support_email: {
    group: groups.support,
    label: `Email support`,
  },
  support_sla: {
    group: groups.support,
    label: `Premium email support`,
  },
  ci_cd: {
    group: groups.premium,
    label: 'Continuous integration/delivery',
  },
  matrix_testing: {
    group: groups.premium,
    label: 'Test matrix automation',
  },
  // advanced_user_management: {
  //   group: groups.premium,
  //   label: 'Advanced user management (RBAC, SSO)',
  // },
  consulting: {
    group: groups.premium,
    label: 'Design system consulting',
  },
};

export const Free = {
  title: 'Free',
  legend: 'Discover Backlight',
  price: {
    value: '0',
    currency: 'EUR',
    symbol: '€',
  },
  additionalFeatures: [
    {
      restriction: 'Unlimited',
      ...features.users,
      highlight: true,
    },
    {
      restriction: 'Up to 2',
      ...features.projects,
      highlight: true,
    },
    features.editor,
    features.share,
    features.github,
    features.gitlab,
    features.bitbucket,
    features.preview,
    features.publish_public,
    features.support_community,
  ],
  action: {
    label: 'Get started',
    url: '/get-started',
    type: 'outline',
  },
};

export const Pro = {
  title: 'Pro',
  price: {
    value: '149',
    symbol: '$',
    currency: 'USD',
  },
  inherits: Free,
  additionalFeatures: [
    {
      restriction: 'Up to 5',
      ...features.projects,
      highlight: true,
    },
    features.ci_cd,
    features.publish_custom_registry,
    features.publish_private,
    features.support_email,
  ],
  action: {
    label: 'Subscribe',
    url: '/signup/PRO',
    type: 'primary',
  },
};

export const Enterprise = {
  title: 'Enterprise',
  inherits: Pro,
  additionalFeatures: [
    {
      ...features.support_sla,
      highlight: true,
    },
    features.matrix_testing,
    features.consulting,
  ],
  price: {
    value: '499',
    symbol: '$',
    currency: 'USD',
    style: 'text-decoration: line-through',
  },
  action: {
    label: 'Contact us',
    url: 'mailto:hello@backlight.dev',
    type: 'primary',
  },
};
