document.addEventListener('DOMContentLoaded', () => {

    // Script de la barre de navigation =============================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Ouvrir/fermer le menu latéral
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    document.getElementById('toggle').addEventListener('click', function () {
        const selector = document.querySelector('.selector');
        const root = document.documentElement;
        const sun = document.querySelector('.fa-sun');
        const moon = document.querySelector('.fa-moon');

        const swipe = document.getElementById('swipe');
        const body = document.body;

        swipe.classList.add('current');

        if (toggle.checked) {
            sun.style.display = 'block';
            moon.style.display = 'none';
            // Déplace le sélecteur à droite
            selector.style.left = 'calc(100% - 50px)';
            setTimeout(() => {
                // Inverse les couleurs en changeant la couleur des variables CSS
                root.style.setProperty('--main-color', 'white');
                root.style.setProperty('--second-color', 'black');


                swipe.classList.remove('current');
            }, 600);
        } else {
            // Affiche l'icone du soleil et cache celle de la lune
            sun.style.display = 'none';
            moon.style.display = 'block';
            // Inverse les couleurs en changeant la couleur des variables CSS
            // Déplace le sélecteur à gauche
            selector.style.left = '10px';

            setTimeout(() => {
                // Inverse les couleurs en changeant la couleur des variables CSS
                root.style.setProperty('--main-color', 'black');
                root.style.setProperty('--second-color', 'white');


                swipe.classList.remove('current');

            }, 600);
        }
    });

// Script du bouton me contacter de la page d'accueil ======================================================================
    const contactLink = document.querySelector('.buttons-contact');
    const arrowIcon = contactLink.querySelector('.fa-arrow-right');

    contactLink.addEventListener('click', function (event) {          
        event.preventDefault(); // Empêche la redirection immédiate
        arrowIcon.style.transform = 'translateX(-200px)'; // Animation vers la gauche


        setTimeout(() => {
            window.location.href = contactLink.getAttribute('href');
            arrowIcon.style.transform = 'translateX(0px)';  // Redirection après animation
        }, 300); // Temps pour l'animation (300ms)
    });

});