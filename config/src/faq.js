export const pricingFAQ = [
  {
    question: 'What is the difference between editors and viewers?',
    answer: `Editors are able to access and contribute to the Design System.
    Viewers can only access Design Systems for discovery and review.`,
  },
  {
    question: 'Do you have free trial periods?',
    answer: `No, we don't. But the free plan should get you far enough to evaluate Backlight properly.`,
  },
  {
    question: 'Do you have open-source and education licenses?',
    answer: ` Yes. We have free licenses for open-source and education. Please contact us contact@backlight.dev to get information.`,
  },
  {
    question: 'Can I eject my Design System?',
    answer: `Yes. We don't like lock-in. Your Design System is on your Git repository and you can always continue outside of Backlight.`,
  },
  {
    question: 'Does Backlight work in every browser?',
    answer: `Backlight works on MSEdge/Safari/Firefox/Chrome and other chromium-based browsers.`,
  },
  {
    question:
      'Can I export or serve my components in every environment via the CLI?',
    answer: `Yes. Our CLI works in Windows/MacOS/Linux.`,
  },
  {
    question:
      'How visual regressions are calculated',
    answer: `Backlight counts the number of PRs and updates that are visually tested. It's independent of the number of components and stories. It resets every month. Gitlab CI processing time is not counted.
    Example: If you open 50 PRs and then update each PR 2x with new commits, Backlight counts these as 150 visual regression reports (50 + 50x2).`,
  },
];
