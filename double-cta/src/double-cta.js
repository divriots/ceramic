import '~/button';

customElements.define(
  'double-cta',
  class extends HTMLElement {
    connectedCallback() {
      const primaryText = this.getAttribute('primaryText');

      const primaryHref = this.hasAttribute('primaryHref')
        ? `href="${this.getAttribute('primaryHref')}"`
        : '';
      const primaryOnClick = this.hasAttribute('primaryOnClick')
        ? `onclick="${this.getAttribute('primaryOnClick')}"`
        : '';

      const secondaryText = this.getAttribute('secondaryText');
      const secondaryHref = this.hasAttribute('secondaryHref')
        ? `href="${this.getAttribute('secondaryHref')}"`
        : '';
      const secondaryOnClick = this.hasAttribute('secondaryOnClick')
        ? `onclick="${this.getAttribute('secondaryOnClick')}"`
        : '';

      this.innerHTML = /*html*/ `
      <div class="flex mt-8 space-x-2">
        <button class="btn-primary" ${primaryHref} ${primaryOnClick}>${primaryText}</button>
        <button class="btn-text" ${secondaryHref} ${secondaryOnClick}>${secondaryText}</button>
      </div>`;
    }
  }
);
