class TopRightProfile extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ['profilename', 'profilepic']; // Observing 'profilename' and 'profilepic' attributes
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    // Fetching profile name and profile picture attributes
    const profileName = this.getAttribute('profilename') || 'Default Name';
    const profilePic = this.getAttribute('profilepic') || 'assets/profile/default.svg'; // Fallback to default image

    this.innerHTML = `
      <div class="wholetoprightpart">
        <div class="toprightleft flexbox">Courses</div>
        <div class="toprightright">
          <div class="profilename">${profileName}</div>
          <div class="profileright flexbox gap-5">
            <div class="profilepic flexbox">
              <img src="${profilePic}" alt="Profile Picture" onerror="this.src='assets/profile/default.svg';">
            </div>
            <div class="more flexbox">
              <img src="assets/profile/arrorwdown.svg" alt="More Options">
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('top-right-profile', TopRightProfile);
