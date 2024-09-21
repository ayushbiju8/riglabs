class GridContainer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="grid-container">
          <div class="first-column">
            <top-row></top-row>
            <div class="bottom-row">
              <div class="cardboxcontainer">
                <div class="holder">
                  <card-box 
                    price="₹16000" 
                    date="14 JUL - 17 AUG" 
                    image="assets/contentlogo/html.svg"
                    title="HTML for Beginners" 
                    rating="4.5" 
                    button1="HTML" 
                    button2="Web"
                    bgclass="bg-color-class"
                    description="Learn the basics of HTML and build your first web page!">
                  </card-box>
                </div>
                <div class="holder">
                  <card-box 
                    price="₹12000" 
                    date="10 AUG - 31 AUG" 
                    image="assets/contentlogo/css.svg"
                    title="CSS for mobile" 
                    rating="4.3" 
                    button1="Engineering" 
                    button2="Testing"
                    bgclass="bg-color-class2"
                    description="You'll learn about CSS layout,wrappers creating a sticky navbar, and more!">
                  </card-box>
                </div>
                <div class="holder">
                  <card-box 
                    price="₹17000" 
                    date="17 SEPT - 22 SEPT" 
                    image="assets/contentlogo/js.svg"
                    title="Javascript" 
                    rating="4.7" 
                    button1="Javascript" 
                    button2="Development"
                    bgclass="bg-color-class3"
                    description="This course provides a comprehensive introduction to the javascript programming language.">
                  </card-box>
                </div>
              </div>
            </div>
          </div>
          <div class="second-column">
            <x-heading 
              title="July 2024" 
              linkText="Show month" 
              linkIcon="assets/profile/arrowright.svg">
            </x-heading>
            <div class="dayboxholder flexbox">
              <div class="daybox">
                <day-card day="SUN" date="12"></day-card>
                <day-card day="MON" date="13" active></day-card>
                <day-card day="TUE" date="14"></day-card>
                <day-card day="WED" date="15"></day-card>
                <day-card day="THU" date="16"></day-card>
                <day-card day="FRI" date="17"></day-card>
                <day-card day="SAT" date="18"></day-card>
              </div>
            </div>
            <x-heading 
              title="Mentors" 
              linkText="See all" 
              linkIcon="assets/profile/arrowright.svg">
            </x-heading>
            <div class="mentorboxholder">
              <div class="mentorbox">
                <mentor-card 
                  profile="assets/mentors/1.svg" 
                  name="John Wilson" 
                  title="UI / UX Designer" 
                  experience="Exp. 6yr">
                </mentor-card>
                <mentor-card 
                  profile="assets/mentors/2.svg" 
                  name="Daniel Hill" 
                  title="Test Engineer" 
                  experience="Exp. 5yr">
                </mentor-card>
                <mentor-card 
                  profile="assets/mentors/3.svg" 
                  name="Sofia Harris" 
                  title="Python Developer" 
                  experience="Exp. 8yr">
                </mentor-card>
                <mentor-card 
                  profile="assets/mentors/4.svg" 
                  name="Eva Smith" 
                  title="Motion Designer" 
                  experience="Exp. 4yr">
                </mentor-card>
              </div>
            </div>
            <x-heading 
              title="Learning Process" 
              linkText="See all" 
              linkIcon="assets/profile/arrowright.svg">
            </x-heading>
          </div>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('grid-container', GridContainer);
  