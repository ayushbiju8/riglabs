class ProfileBox extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    static get observedAttributes() {
      return ['name', 'profilepic']; // Watching for 'name' and 'profilepic' attributes
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      const name = this.getAttribute('name') || 'Default Name';
      const profilePic = this.getAttribute('profilepic') || 'assets/default-profile.svg'; // Default profile pic
  
      this.innerHTML = `
        <div class="profilebox">
          <div class="profilepic">
            <img src="${profilePic}" alt="Profile Picture">
          </div>
          <div class="profilename">
            <h3>${name}</h3>
          </div>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('profile-box', ProfileBox);
  