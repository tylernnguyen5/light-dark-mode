const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = 'true';
    toggleDarkLightMode(true);
  }
} 

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Functions

// For the toggle switch
function switchTheme(e) {
  const checked = e.target.checked;

  checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
  checked ? toggleDarkLightMode(true) : toggleDarkLightMode(false);
  checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
}

// Toggle dark/light mode
function  toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  // Switch
  toggleIcon.children[0].textContent = isDark ? 'Dark Side' : 'Light Side';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  // Images
  isDark ? imageMode('dark') : imageMode('light');
}


// Change images to certain mode
function imageMode(mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}