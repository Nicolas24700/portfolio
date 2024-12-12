document.addEventListener('DOMContentLoaded', () => {
    fetch('projet.json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            updateProjectCount(data)
            generation(data);
            effectinclinaison();
        });
    });

    //  Script pour mettre à jour le nombre de projets affichés ===================================================
    function updateProjectCount(data) {
        const projectCount = data.length;
        document.getElementById('numberprojet').textContent = projectCount;
    }

    // Fonction qui génère les éléments HTML à partir des données JSON========================================
    function generation(data) {
        data.forEach(function (projet) {
            var languages = projet["languages"]
                // Transforme chaque langue en une chaîne HTML avec une div et un paragraphe
                .map(lang => "<div class='tags'><p>" + lang + "</p></div>")
                // Joint toutes les chaînes HTML en une seule chaîne
                .join('');
            const projectHTML = `
            <div class="projet-container">
            <h2>${projet["titre"]}</h2>
            <div class="container">
                <img src="${projet["img-projet"]}" alt="" class="image-projet">
                <div class="text-section">
                    <p>Date : ${projet["date"]}</p>
                    <div class="language-tag">
                        ${languages}
                    </div>
                    <p>
                        ${projet["description"]}
                    </p>
                    <p><strong>Compétences développées :</strong> ${projet["competenceDev"]}</p>
                    <p><strong>Réalisation : </strong>${projet["realisation"]}</p>
                    <p><strong>Contexte :</strong> ${projet["contexte"]}</p>
                    <div class="projet-linkDIV">
                        <a href="${projet["github-link"]}" target="_blank" class="projet-link" aria-label="lien github du projet"><i class="fa-brands fa-github"></i></a>
                        <a href="${projet["lien"]}" target="_blank" class="projet-link">Lien du projet <i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `;

            const projectContainer = document.querySelector('.allprojets');

            // Si le conteneur de projet existe, on ajoute le HTML du projet sinon on fait rien
            if (projectContainer) {
                projectContainer.innerHTML += projectHTML;
            }
        });
    }

    // SCRIPT POUR L'inclinaison de la div projet ========================================================================
    function effectinclinaison() {
        const projetdiv = document.querySelectorAll('.projet-container');
    
        projetdiv.forEach(div => {
            div.addEventListener('mousemove', (e) => {
                // Récupère les coordonnées de la souris par rapport à la div
                const rect = div.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
    
                // Calcule le centre de la div
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
    
                // Calcule la différence entre la position de la souris et le centre de la div
                const deltaX = (mouseX - centerX) / centerX;
                const deltaY = (mouseY - centerY) / centerY;
    
                const maxTilt = 5; // L'angle maximum d'inclinaison

                // Calcule l'angle d'inclinaison en fonction de la position de la souris
                const tiltX = deltaY * maxTilt;
                const tiltY = -deltaX * maxTilt;
    
                // Applique la transformation CSS à la div
                div.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            });
             // Réinitialise la transformation lorsque la souris quitte la div
            div.addEventListener('mouseleave', () => {
                div.style.transform = 'perspective(0px) rotateX(0deg) rotateY(0deg)';
            });
        });
        }

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

    // Si le bouton existe
    if (contactLink) {
        const arrowIcon = contactLink.querySelector('.fa-arrow-right');
        // Si l'icone existe dans le bouton on fait l'animation
        if (arrowIcon) {
            contactLink.addEventListener('click', function (event) {
                event.preventDefault(); // Empêche la redirection immédiate
                arrowIcon.style.transform = 'translateX(-200px)'; // Animation vers la gauche


                setTimeout(() => {
                    window.location.href = contactLink.getAttribute('href'); // Redirection vers la page de contact
                    arrowIcon.style.transform = 'translateX(0px)';  // la fleche revient à sa position initiale
                }, 200); // Temps pour l'animation (300ms)
            });


        }
    }

});
