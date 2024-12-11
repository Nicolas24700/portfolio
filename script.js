document.addEventListener('DOMContentLoaded', () => {

    // Script de la barre de navigation =============================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Ouvrir/fermer le menu latéral
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // SCRIPT du toggle qui permet de mettre le mode JOUR / NUIT ========================================================

    const selector = document.querySelector('.selector');
    const root = document.documentElement;
    const sun = document.querySelector('.fa-sun');
    const moon = document.querySelector('.fa-moon');
    const toggle = document.getElementById('toggle');

    // Récupére les couleurs stockées dans le localStorage
    const savemaincolor = localStorage.getItem('--main-color');
    const savesecondcolor = localStorage.getItem('--second-color');

    // Si les deux couleurs sont définies, appliquer les couleurs appropriées
    if (savemaincolor && savesecondcolor) {
        root.style.setProperty('--main-color', savemaincolor);
        root.style.setProperty('--second-color', savesecondcolor);
        // Si la couleur principale est blanche, affiche l'icone du soleil
        if (savemaincolor === 'white') {
            toggle.checked = true;
            sun.style.display = 'block';
            moon.style.display = 'none';
            selector.style.left = 'calc(100% - 50px)';
        } else {
            // Sinon affiche l'icone de la lune
            toggle.checked = false;
            sun.style.display = 'none';
            moon.style.display = 'block';
            selector.style.left = '10px';
        }

    }

    toggle.addEventListener('click', function () {

        const swipe = document.getElementById('swipe');

        swipe.classList.add('current');

        if (toggle.checked) {
            sun.style.display = 'block';
            moon.style.display = 'none';
            // Déplace le sélecteur à droite
            selector.style.left = 'calc(100% - 50px)';
            setTimeout(() => {
                // Inverse les couleurs en changeant la couleur des variables CSS
                root.style.setProperty('--main-color', 'white');
                root.style.setProperty('--second-color', '#0c0c0c');
                // on stocke les couleurs dans le localStorage
                localStorage.setItem('--main-color', 'white');
                localStorage.setItem('--second-color', '#0c0c0c');

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
                root.style.setProperty('--main-color', '#0c0c0c');
                root.style.setProperty('--second-color', 'white');
                // on stocke les couleurs dans le localStorage
                localStorage.setItem('--main-color', '#0c0c0c');
                localStorage.setItem('--second-color', 'white');

                swipe.classList.remove('current');

            }, 600);
        }
    });

    // Script du bouton a propos de la page d'accueil ======================================================================
    const contactLink = document.querySelector('.buttons-apropos');
    const arrowIcon = contactLink.querySelector('.fa-arrow-right');

    contactLink.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche la redirection immédiate
        arrowIcon.style.transform = 'translateX(-200px)'; // Animation vers la gauche


        setTimeout(() => {
            window.location.href = contactLink.getAttribute('href'); // Redirection vers la page de contact
            arrowIcon.style.transform = 'translateX(0px)';  // la fleche revient à sa position initiale
        }, 200); // Temps pour l'animation (300ms)
    });

});