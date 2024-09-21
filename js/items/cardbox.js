class CardBox extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    static get observedAttributes() {
      return ['price', 'date', 'image', 'title', 'rating', 'button1', 'button2', 'bgclass', 'description']; // Added description
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      const price = this.getAttribute('price') || '₹0';
      const date = this.getAttribute('date') || 'N/A';
      const image = this.getAttribute('image') || '';
      const title = this.getAttribute('title') || 'Card Title';
      const rating = this.getAttribute('rating') || '0';
      const button1 = this.getAttribute('button1') || 'Button 1';
      const button2 = this.getAttribute('button2') || 'Button 2';
      const bgclass = this.getAttribute('bgclass') || ''; // Default empty class
      const description = this.getAttribute('description') || 'Lorem ipsum dolor sit amet.'; // Default description
  
      this.innerHTML = `
        <div class="cardbox">
          <div class="cardbox-leftpart ${bgclass}"> <!-- Added bgclass here -->
            <div class="price">${price}</div>
            <div class="date flexbox">${date}</div>
            <img src="${image}" alt="">
          </div>
          <div class="cardbox-rightpart">
            <div class="crphead">
              <h3>${title}</h3>
              <div class="star flexbox">
                <img src="assets/contentlogo/star.svg" alt="">${rating}
              </div>
            </div>
            <div class="crppara">
              <p>${description}</p> <!-- Added paragraph variable -->
            </div>
            <div class="crpbottom">
              <div class="primb">
                <button>${button1}</button>
                <button>${button2}</button>
              </div>
              <div class="secb flexbox">
                <img src="assets/contentlogo/secbutton.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('card-box', CardBox);
  