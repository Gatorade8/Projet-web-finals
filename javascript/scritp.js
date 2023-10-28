/* Basculer entre l'ajout et la suppression de la classe "responsive" au topnav lorsque l'utilisateur clique sur l'icône */
function myFunction() {
  // Récupère l'élément avec l'ID "myTopnav"
  var x = document.getElementById("myTopnav");
  // Vérifie si la classe de l'élément est "topnav"
  if (x.className === "topnav") {
    // Si c'est le cas, ajoute la classe "responsive"
    x.className += " responsive";
  } else {
    // Sinon, remplace la classe par "topnav"
    x.className = "topnav";
  }
}

// Définit un indice pour suivre les diapositives
let slideIndex = 0;

// Appelle la fonction showSlides pour afficher les diapositives
showSlides();

// Fonction pour afficher les diapositives en boucle
function showSlides() {
let i;
// Récupère tous les éléments avec la classe "mySlides"
let slides = document.getElementsByClassName("mySlides");
// Masque toutes les diapositives en les mettant à "display: none"
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
// Incrémente l'indice des diapositives
slideIndex++;
// Si l'indice est supérieur au nombre de diapositives, réinitialise l'indice à 1
if (slideIndex > slides.length) {slideIndex = 1}
// Affiche la diapositive correspondant à l'indice actuel
slides[slideIndex-1].style.display = "block";
// Appelle récursivement la fonction showSlides après 2 secondes (2000 millisecondes)
setTimeout(showSlides, 2000); // Change d'image toutes les 2 secondes
}


//Bouton pour remonter en haut //
// Affiche le bouton de retour en haut lorsque l'utilisateur fait défiler vers le bas de la page
window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
  } else {
      scrollTopBtn.style.display = "none";
  }
}

// Fait défiler la page vers le haut de manière fluide lorsque le bouton est cliqué
function scrollToTop() {
  document.body.scrollTop = 0; // Pour les navigateurs Safari
  document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}
//on passe au footer //
// Récupère l'élément du footer
const footer = document.getElementById('myFooter');

// Récupère la position de défilement précédente
let lastScrollPosition = window.pageYOffset;

// Ajoute un écouteur d'événements pour le défilement de la page
window.addEventListener('scroll', function() {
    // Récupère la position de défilement actuelle
    const currentScrollPosition = window.pageYOffset;

    // Vérifie si l'utilisateur fait défiler vers le bas ou vers le haut
    if (currentScrollPosition > lastScrollPosition) {
        // L'utilisateur fait défiler vers le bas, cache le footer
        footer.classList.add('hide-footer');
    } else {
        // L'utilisateur fait défiler vers le haut, affiche le footer
        footer.classList.remove('hide-footer');
    }

    // Met à jour la position de défilement précédente
    lastScrollPosition = currentScrollPosition;
});
