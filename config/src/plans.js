export const groups = {
  collaboration: 'Collaboration',
  source_control: 'Git and CI',
  package_registry: 'npm Package',
  // premium: 'Premium',
  support: 'Support',
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
    label: 'Online IDE and Command-line',
  },
  share: {
    group: groups.collaboration,
    label: 'Instand share',
  },
  git: {
    group: groups.source_control,
    label: 'GitHub & GitLab integrations',
  },
  pr: {
    group: groups.source_control,
    label: 'Visual review of Pull Requests',
  },
  visual_regressions: {
    group: groups.source_control,
    label: 'Visual regression reports',
  },
  publish_public: {
    group: groups.package_registry,
    label: 'Publish on scope <code>@backlight-dev</code>',
  },
  publish_custom_scope: {
    group: groups.package_registry,
    label: 'Publish to any scope',
  },
  publish_custom_registry: {
    group: groups.package_registry,
    label: 'Publish to any registry',
  },
  publish_private: {
    group: groups.package_registry,
    label: 'Publish private packages',
  },
  support_community: {
    group: groups.support,
    label: `<a style="text-decoration: underline" href='https://discord.gg/z7JUzhn' target="_blank">Community support on Discord</a>`,
  },
  support_email: {
    group: groups.support,
    label: `Email support`,
  },
  support_premiumemail: {
    group: groups.support,
    label: `Email support with SLA`,
  },
};

export const Free = {
  title: 'Starter',
  legend: 'Discover Backlight',
  price: {
    value: 'Free',
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
    features.git,
    features.pr,
    {
      ...features.visual_regressions,
      restriction: '100',
    },
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
  legend: 'Take it to the next level',
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
    {
      ...features.visual_regressions,
      restriction: '1000',
    },
    features.publish_custom_registry,
    features.publish_custom_scope,
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
  legend: 'Cover all your needs',
  price: {
    value: '499',
    symbol: '$',
    currency: 'USD',
  },
  inherits: Pro,
  additionalFeatures: [
    {
      restriction: 'Unlimited',
      ...features.projects,
      highlight: true,
    },
    {
      ...features.visual_regressions,
      restriction: '∞',
    },
    features.support_premiumemail,
  ],
  action: {
    label: 'Contact us',
    url: 'mailto:hello@backlight.dev',
    type: 'outline',
  },
};