class DayCard extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.addEventListener('click', this.makeActive.bind(this)); // Add click event listener
  }

  static get observedAttributes() {
    return ['day', 'date', 'active'];
  }

  attributeChangedCallback() {
    this.render();
  }

  makeActive() {
    // Deactivate all other day cards
    const allCards = document.querySelectorAll('day-card');
    allCards.forEach(card => card.removeAttribute('active'));

    // Activate the clicked card
    this.setAttribute('active', '');
  }

  render() {
    const day = this.getAttribute('day') || 'SUN';
    const date = this.getAttribute('date') || '1';
    const isActive = this.hasAttribute('active');
    const activeClass = isActive ? 'active' : '';

    this.innerHTML = `
      <div class="days ${activeClass}">
        <div class="day">${day}</div>
        <div class="dates">${date}</div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('day-card', DayCard);
