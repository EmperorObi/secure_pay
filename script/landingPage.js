const hamMenu = document.querySelector(".nav-toggle");

const offScreenMenu = document.querySelector(".off-screen-navBar");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// on scroll add box-shadow
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navBar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-shadow');
  } else {
    navbar.classList.remove('navbar-shadow');
  }
});
