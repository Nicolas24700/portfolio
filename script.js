document.addEventListener('DOMContentLoaded', () => {

    // Script de la barre de navigation =============================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Ouvrir/fermer le menu latéral
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    });


    // Script du bouton switch
    document.getElementById('toggle').addEventListener('change', function () {
        const toggleWrapper = document.querySelector('.toggle-wrapper');
        const selector = document.querySelector('.selector');
        const root = document.documentElement;
        const sun = document.querySelector('.fa-sun');
        const moon = document.querySelector('.fa-moon');

        if (toggle.checked) {
            // Affiche l'icone de la lune et cache celle du soleil
            sun.style.display = 'block';
            moon.style.display = 'none';

            // Déplace le sélecteur à droite
            selector.style.left = 'calc(100% - 50px)';
            // Inverse les couleurs en changeant la couleur des variables CSS
            root.style.setProperty('--main-color', 'white');
            root.style.setProperty('--second-color', 'black');
            selector.style.backgroundColor = 'var(--second-color)';
            toggleWrapper.style.backgroundColor = 'var(--main-color)';
        } else {
            // Affiche l'icone du soleil et cache celle de la lune
            sun.style.display = 'none';
            moon.style.display = 'block';
            toggleWrapper.style.backgroundColor = 'var(--main-color)';
            // Inverse les couleurs en changeant la couleur des variables CSS
            root.style.setProperty('--main-color', 'black');
            root.style.setProperty('--second-color', 'white');
            // Déplace le sélecteur à gauche
            selector.style.left = '10px';
            selector.style.backgroundColor = 'var(--second-color)';
        }
    });

});