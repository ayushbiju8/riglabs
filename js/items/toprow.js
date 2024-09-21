class TopRow extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.addClickListeners();
  }

  render() {
    this.innerHTML = `
      <div class="top-row">
        <ul>
          <li class="active">All</li>
          <li>Advertising</li>
          <li>Design</li>
          <li>Marketing</li>
          <li>Illustration</li>
          <li>Brand</li>
        </ul>
      </div>
    `;
  }

  addClickListeners() {
    const listItems = this.querySelectorAll('li');
    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        // Remove 'active' class from all list items
        listItems.forEach((li) => li.classList.remove('active'));
        
        // Add 'active' class to clicked item
        item.classList.add('active');
      });
    });
  }
}

// Define the custom element
customElements.define('top-row', TopRow);
