import Palette from "./palette.vue";
import "./palette.vue.css";
import "./shades.vue.css";
import "./color.vue.css";
import { colors } from "../index.js";

export const palette = () => ({
  components: { Palette },
  setup() {
    return { colors };
  },
  template: `<Palette :colors="colors"/>`,
});
