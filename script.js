// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});



const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset(); // Clear form after submission
  } else {
    alert('Please fill in all fields before submitting.');
  }
});


//navbar menu handling
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const closeMenu = document.getElementById('close-menu');

// Open menu
menuToggle.addEventListener('click', () => {
    navbar.classList.add('open');
});

// Close menu
closeMenu.addEventListener('click', () => {
    navbar.classList.remove('open');
});
