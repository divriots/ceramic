import { LitElement, ScopedStylesController, html, css } from '@lion/core';
import '@divriots/infini-scroll/define';
import technologies from './technologies.js';

export class LcdCompatibility extends LitElement {
  static scopedStyles(scope) {
    return css`
      .${scope} .technology img {
        transition: transform 0.1s ease-out, opacity 0.1s ease-out;
      }

      .${scope} .technology:hover img {
        transform: scale(1.1);
      }

      .${scope} .technology figcaption {
        transition: opacity 0.1s ease-out;
      }

      .${scope} .technology:hover figcaption {
        opacity: 1;
      }

      .${scope} .infini-wrapper {
        position: relative;
      }

      .${scope} .infini-wrapper::before,
      .${scope} .infini-wrapper::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 30px;
        z-index: 1;
        pointer-events: none;
      }

      .${scope} .infini-wrapper::before {
        inset: 0;
        background: linear-gradient(to left, rgba(23, 23, 23, 0), currentColor);
      }

      .${scope} .infini-wrapper::after {
        top: 0;
        right: 0;
        background: linear-gradient(
          to right,
          rgba(23, 23, 23, 0),
          currentColor
        );
      }

      @media (min-width: 420px) {
        .${scope} .infini-wrapper::before,
        .${scope} .infini-wrapper::after {
          width: 70px;
        }
      }

      @media (min-width: 600px) {
        .${scope} .infini-wrapper::before,
        .${scope} .infini-wrapper::after {
          width: 150px;
        }
      }
    `;
  }

  static get properties() {
    return {
      boxSize: { attribute: false },
      containerHeight: { attribute: false },
      rows: { attribute: false },
    };
  }

  constructor() {
    super();
    this.boxSize = 128;
    this.boundResize = this.resize.bind(this);
    this.scopedStylesController = new ScopedStylesController(this);
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.boundResize);
    this.resize();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.boundResize);
  }

  render() {
    return html`
      <section
        class="text-center text-white bg-black-divriots px-8 pt-24 pb-16 relative"
      >
        <h2 class="text-4xl sm:text-5xl lg:text-6xl">
          Bring your own
          <span class="text-primary">stack</span>
        </h2>
        <div class="infini-wrapper text-black-divriots mx-auto max-w-4xl my-32">
          <infini-scroll
            drag-speed="1"
            scroll-interval="15"
            container-height="${this.containerHeight}"
            box-width="${this.boxSize}"
            row-amount="${this.rows}"
            follow-user-direction
          >
            ${technologies.map(
              (tech) => html`
                <figure class="technology relative p-6">
                  <figcaption
                    class="opacity-0 -bottom-2 w-full absolute text-center left-0"
                  >
                    <span class="p-1 text-white bg-black-divriots">
                      ${tech.name}
                    </span>
                  </figcaption>
                  <img
                    width="80"
                    height="80"
                    class="w-20 h-20"
                    src="${tech.logo}"
                    alt="${tech.name}"
                    aria-label="${tech.name}"
                    loading="lazy"
                  />
                </figure>
              `
            )}
          </infini-scroll>
        </div>
      </section>
    `;
  }

  resize() {
    this.rows = window.innerWidth > 600 ? 2 : 3; // 3 rows for mobile
    this.containerHeight = this.rows * this.boxSize;
  }
}

customElements.define('lcd-compatibility', LcdCompatibility);
