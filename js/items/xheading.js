class XHeading extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    static get observedAttributes() {
      return ['title', 'linkText', 'linkIcon'];
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      const title = this.getAttribute('title') || 'Heading';
      const linkText = this.getAttribute('linkText') || 'See all';
      const linkIcon = this.getAttribute('linkIcon') || 'assets/profile/arrowright.svg';
  
      this.innerHTML = `
        <div class="xheading">
          <div class="xfirst">${title}</div>
          <div class="xsecond flexbox gap-5">${linkText} <img src="${linkIcon}" alt=""></div>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('x-heading', XHeading);
  