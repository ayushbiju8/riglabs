class MentorCard extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    // Define attributes that should trigger a re-render when changed
    static get observedAttributes() {
      return ['profile', 'name', 'title', 'experience'];
    }
  
    // Called when an attribute is changed (optional if you want dynamic updates)
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      // Retrieve the attributes for the mentor's profile, name, title, and experience
      const profile = this.getAttribute('profile') || 'assets/mentors/default.svg';
      const name = this.getAttribute('name') || 'John Doe';
      const title = this.getAttribute('title') || 'UI / UX Designer';
      const experience = this.getAttribute('experience') || 'Exp. 0yr';
  
      // Set the inner HTML for the custom mentor component
      this.innerHTML = `
        <div class="mentor">
          <div class="profile"><img src="${profile}" alt="Profile Picture"></div>
          <div class="desc">
            <h4>${name}</h4>
            <p class="light">${title}</p>
          </div>
          <div class="exp light">${experience}</div>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('mentor-card', MentorCard);
  