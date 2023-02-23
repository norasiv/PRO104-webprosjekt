// JAVASCRIPT TIL HAMBURGERMENYEN
document.addEventListener('DOMContentLoaded', () => {

  // Henter alle "navbar-burger" elementer
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Sjekker om det er noen navbar burgere
  if ($navbarBurgers.length > 0) {

    // Legger til click event på hver av dem
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Henter målet fra "data-target" attributten
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggler "is-active" klassen på både "navbar-burger og "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});