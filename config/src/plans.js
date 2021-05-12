export const groups = {
  collaboration: 'Collaboration',
  integration: 'Integration',
  support: 'Support',
  premium: 'Premium',
};

export const features = {
  editors: {
    group: groups.collaboration,
    label: 'Editors per project',
  },
  viewers: {
    group: groups.collaboration,
    restriction: 'Unlimited',
    label: 'Viewers per project',
  },
  projects: {
    group: groups.collaboration,
    label: 'Public/private projects',
  },
  github: {
    group: groups.integration,
    label: 'Github integration',
  },
  gitlab: {
    group: groups.integration,
    label: 'Gitlab integration',
  },
  bitbucket: {
    group: groups.integration,
    label: 'BitBucket integration',
  },
  publish_public: {
    group: groups.integration,
    label: 'Publish to @ds-dev',
  },
  publish_custom: {
    group: groups.integration,
    label: 'Publish to any package registry, any visibility',
  },
  support_community: {
    group: groups.support,
    label: `<a class='icon' href='https://discord.gg/z7JUzhn'>Community support</a>`,
  },
  support_email: {
    group: groups.support,
    label: `Email support`,
  },
  support_sla: {
    group: groups.support,
    label: `Premium support with SLA`,
  },
  ci_cd: {
    group: groups.premium,
    label: 'Continuous Integration/Delivery',
  },
  matrix_testing: {
    group: groups.premium,
    label: 'Test matrix automation',
  },
  advanced_user_management: {
    group: groups.premium,
    label: 'Advanced User Management (RBAC, SSO)',
  },
};

export const Free = {
  title: 'Free',
  legend: 'Open source and Prototyping',
  price: {
    value: '0',
    currency: 'USD',
    symbol: '$',
  },
  additionalFeatures: [
    features.viewers,
    {
      restriction: 'Up to 3',
      ...features.editors,
    },
    {
      restriction: 'Up to 2',
      ...features.projects,
    },
    features.github,
    features.publish_public,
    features.support_community,
  ],
  action: {
    label: 'Sign up',
    url: '/signup',
    type: 'outline',
  },
};

export const Pro = {
  title: 'Pro',
  price: {
    value: '29',
    symbol: '$',
    currency: 'USD',
    unit: 'Editor',
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
    features.gitlab,
    features.bitbucket,
    features.publish_custom,
    features.support_email,
  ],
  action: {
    label: 'Subscribe',
    url: '/signup/ENTHUSIAST',
    type: 'primary',
  },
};

export const Enterprise = {
  title: 'Enterprise',
  inherits: Pro,
  additionalFeatures: [
    features.matrix_testing,
    features.ci_cd,
    features.support_sla,
    features.advanced_user_management,
  ],
  price: {
    value: 'On Demand',
  },
  action: {
    label: 'Contact us',
    url: '#',
    type: 'primary',
  },
};
