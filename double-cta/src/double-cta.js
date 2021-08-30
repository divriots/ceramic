customElements.define(
  'double-cta',
  class extends HTMLElement {
    connectedCallback() {
      const primaryText = this.getAttribute('primaryText');
      const primaryHref = this.getAttribute('primaryHref');

      const secondaryText = this.getAttribute('secondaryText');
      const secondaryHref = this.getAttribute('secondaryHref');

      this.innerHTML = /*html*/ `
      <div class="flex mt-8 space-x-2">
        <a class="btn-primary" href="${primaryHref}">${primaryText}</a>
        <a class="btn-text" href="${secondaryHref}">${secondaryText}</a>
      </div>`;
    }
  }
);
