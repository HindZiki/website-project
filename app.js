// Gestion des icônes de recherche
const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');
 
// Afficher le champ de recherche et cacher l'icône lorsqu'on clique sur l'icône de recherche
searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

// Afficher le champ de recherche et cacher l'icône lorsqu'on clique sur l'icône de recherche
searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

// Gestion de la barre de navigation responsive
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

// Afficher la barre de navigation et l'icône de fermeture lorsqu'on clique sur l'icône de menu
bar.addEventListener('click', function(){
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
})

// Cacher la barre de navigation et l'icône de fermeture lorsqu'on clique sur l'icône de fermeture
cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});

/* Gestion du formulaire de réservation */
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour l'instant

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    const phone = document.getElementById('phone').value;

    // Vérification simple (par exemple, vérifier que tous les champs sont remplis)
    if (name === '' || date === '' || time === '' || people === '' || phone === '') {
        alert("Veuillez remplir tous les champs.");
    } else {
        alert(`Réservation confirmée pour ${people} personne(s) au nom de ${name}, le ${date} à ${time}.`);
        // Ici, tu pourrais envoyer les données à un serveur ou une base de données
    }
});

/* Gestion des étoiles pour la note de la recette */
const stars = document.querySelectorAll('.star');

// Ajouter un écouteur d'événement à chaque étoile pour gérer le clic
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        resetStars(); // Réinitialiser toutes les étoiles
        highlightStars(index); // Mettre en évidence jusqu'à l'étoile cliquée
    });
});

// Réinitialiser les étoiles (retirer la classe 'selected')
function resetStars() {
    stars.forEach(star => {
        star.classList.remove('selected');
    });
}

// Mettre en évidence les étoiles jusqu'à l'index spécifié
function highlightStars(index) {
    for (let i = 0; i <= index; i++) {
        stars[i].classList.add('selected');
    }
}
