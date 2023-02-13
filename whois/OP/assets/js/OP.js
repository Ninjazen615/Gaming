var images = [
    'Baggy.png', 'Barbe Noir.png', 'Boa.png', 'Kinemon.png', 'Carrot.png', 'Brook.png', 'Viola.png', 'Chopper.png',

    'Corazon.png', 'Barbe Blanche.png', 'Big Mom.png', 'Bepo.png', 'Marco.png', 'Katakuri.png', 'Yamato.png', 'Doflamingo.png',

    'Shiraohshi.png', 'Law.png', 'Baby5.png', 'Franky.png', 'Zoro.png', 'Kaido.png', 'Godussop.png', 'Jimbe.png',

    'Reiju.png', 'Koala.png', 'Rebecca.png', 'Uta.png', 'Bonney.png', 'Luffy.png', 'Oden.png', 'Nami.png',

    'Ace.png', 'Rayleigh.png', 'Momonosuke.png', 'Robin.png', 'Sabo.png', 'Sanji.png', 'Stussy.png', 'Shanks.png',
];
var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

// Afficher tous les personnages dans la liste
images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="./assets/img/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

// Demander à l'utilisateur de choisir un personnage
var selectedCharacter = prompt("Veuillez choisir un personnage parmi les suivants : ");

// Trouver l'index du personnage choisi
var selectedCharacterIndex = images.indexOf(selectedCharacter + ".png");

// Afficher le personnage choisi par l'utilisateur
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="./assets/img/${images[selectedCharacterIndex]}"></img><br><h1>${images[selectedCharacterIndex].split('.')[0]}</h1>`;
yourCard.appendChild(personToGuess)

var people = document.querySelectorAll('.card');

// Cacher les personnages lorsqu'ils sont cliqués
document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover')
    }
    element.onclick = function () {
        element.style.transition = 'all 0s'
        element.style.visibility = 'hidden'
    }
});
