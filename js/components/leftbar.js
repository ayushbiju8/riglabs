class LeftBox extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.addClickListeners();
  }

  // Add event listeners to each svgbox for the active effect
  addClickListeners() {
    const svgBoxes = this.querySelectorAll('.svgbox');
    svgBoxes.forEach((box) => {
      box.addEventListener('click', () => {
        // Remove active state from all svgboxes
        svgBoxes.forEach((b) => b.classList.remove('active'));

        // Add active state to the clicked svgbox
        box.classList.add('active');
      });
    });
  }

  render() {
    this.innerHTML = `
      <div class="wholeleftbox">
        <div class="lefttop">
          <div class="lefttbpart flexbox abc">
            <img src="assets/logos/logo.svg" alt="Logo">
          </div>
          <div class="leftcontainer">
            <div class="svgbox1 svgbox active"><img src="assets/navicons/1.svg" alt="Icon 1"></div>
            <div class="svgbox2 svgbox"><img src="assets/navicons/2.svg" alt="Icon 2"></div>
            <div class="svgbox3 svgbox"><img src="assets/navicons/3.svg" alt="Icon 3"></div>
            <div class="svgbox4 svgbox"><img src="assets/navicons/4.svg" alt="Icon 4"></div>
            <div class="svgbox5 svgbox"><img src="assets/navicons/5.svg" alt="Icon 5"></div>
            <div class="svgbox6 svgbox"><img src="assets/navicons/6.svg" alt="Icon 6"></div>
          </div>
        </div>
        <div class="lefttbpart flexbox">
          <img src="assets/navicons/last.svg" alt="Last Icon">
        </div>
      </div>
    `;
  }

  // Call this function after component is added to the DOM
  connectedCallback() {
    this.addClickListeners();
  }
}

// Define the custom element
customElements.define('left-box', LeftBox);
