let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('navbar1');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove('hidden');
  } else {
    // Scrolling down
    navbar.classList.add('hidden');
  }
  
  prevScrollPos = currentScrollPos;
});