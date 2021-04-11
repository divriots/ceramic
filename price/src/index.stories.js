import Price from "./index.vue";
import "./index.vue.css";
import "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

export default {
  parameters: {
    layout: "centered",
    backgrounds: { default: "black" },
  },
};

const props = {
  title: "Free",
  legend: "Open source and Prototyping",
  features: [
    {
      description: "Full-featured IDE",
    },
    {
      description: "Public components",
    },
    {
      description: "Sync to Github public repos",
    },
    {
      description: "Publish public packages under <code>@wcd</code> scope",
    },
    {
      description:
        "<a class='icon' href='https://discord.gg/z7JUzhn'>Community support</a>",
    },
  ],
  action: {
    label: "Sign up",
    url: "/signup",
    type: "outline",
  },
};

export const def = () => ({
  components: { Price },
  setup() {
    return { props };
  },
  template: `<Price v-bind="props"/>`,
});
