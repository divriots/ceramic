export const groups = {
  collaboration: 'Collaboration',
  source_control: 'Source control',
  package_registry: 'Package registry',
  support: 'Support',
  premium: 'Premium',
};

export const features = {
  projects: {
    group: groups.collaboration,
    label: 'Design Systems',
    labelSingular: 'Design System',
  },
  editors: {
    group: groups.collaboration,
    label: 'Editors',
  },
  viewers: {
    group: groups.collaboration,
    restriction: 'Unlimited',
    label: 'Viewers',
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
  advanced_user_management: {
    group: groups.premium,
    label: 'Advanced user management (RBAC, SSO)',
  },
  advanced_features: {
    group: groups.premium,
    label: 'Advanced features',
  },
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
    currency: 'USD',
    symbol: '$',
  },
  additionalFeatures: [
    {
      restriction: 'Up to 3',
      ...features.editors,
      highlight: true,
    },
    {
      restriction: '1',
      ...features.projects,
      highlight: true,
    },
    {
      ...features.viewers,
      highlight: true,
    },
    features.github,
    features.gitlab,
    features.bitbucket,
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
  banner: 'Free until september 2021',
  price: {
    value: '29',
    symbol: '$',
    currency: 'USD',
    unit: 'Editor',
    style: 'text-decoration: line-through',
  },
  inherits: Free,
  additionalFeatures: [
    {
      restriction: 'Unlimited',
      ...features.editors,
    },
    {
      restriction: 'Up to 5',
      ...features.projects,
    },
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
      restriction: 'Unlimited',
      ...features.projects,
      highlight: true,
    },
    features.advanced_features,
    features.matrix_testing,
    features.ci_cd,
    features.advanced_user_management,
    features.consulting,
    features.support_sla,
  ],
  price: {
    value: 'On demand',
  },
  action: {
    label: 'Contact us',
    url: 'mailto:hello@backlight.dev',
    type: 'primary',
  },
};
