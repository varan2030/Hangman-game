var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

wins = 0;
losses = 0;

var singer1 = new Singer('Madonna', 'assets/madonna.jpg', '#audio1');
var singer2 = new Singer('Eminem', 'assets/eminem.jpg', '#audio2');
var singer3 = new Singer('Nirvana', 'assets/nirvana.jpg', '#audio3');

var singer = [singer1, singer2, singer3];

newRound('Press any key to start the Game');

document.onkeyup = function (event) { 
letter = event.key.toLowerCase();     
win(letter);
}

function Singer(name,  image, music) {
this.name = name;
this.image = image;
this.music = music;
};

function newRound(message) {
guessesLeft = 8;
guessedLetters = [];
hiddenName = [];

randomSinger = singer[Math.floor(Math.random() * singer.length)]; 

var randomSingerName = randomSinger.name.toLowerCase(); 


singerName = randomSingerName.split('');

for (i = 0; i < singerName.length; i++) {
    hiddenName.push("_");
}

music = randomSinger.music;

img = document.createElement('img');
img.src = (randomSinger.image)
console.log(randomSinger.image);
src = document.getElementById('image');


document.querySelector("#guessedLetters").innerHTML = '';
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
document.querySelector('#win').innerHTML = wins;
document.querySelector('#lost').innerHTML = losses;
document.querySelector('#word').innerHTML = hiddenName.join(' ');
document.querySelector('#message').innerHTML = message;
}

function win(letter) {
if (hiddenName.indexOf('_') !== -1) { 
    document.querySelector('#message').innerHTML = ''; 
    chosen(letter); 
}
if (hiddenName.indexOf('_') === -1) { 
    wins++;
    document.querySelector(music).play();
    document.querySelector('#singer').innerHTML = randomSinger.name;
    src.appendChild(img);
    newRound('WIN!!!  Press any key to restart the Game');
    console.log(music);
       
}
if (guessesLeft <= 0) {
    losses++; 
    newRound('LOSE!!!\'  Press any key to restart the Game');
}
}

function chosen(letter) { 
if ((letterChoices.indexOf(letter) !== -1) && (guessedLetters.indexOf(letter) == -1)) { 
    if (singerName.indexOf(letter) == -1) {
        guessedLetters.push(letter);
        guessesLeft--;
        var html = String(guessedLetters).toUpperCase().split(', ');
        document.querySelector("#guessedLetters").innerHTML = html;
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;

    } else {
        for (i = 0; i < singerName.length; i++) {
            if (singerName[i] === letter) {
                hiddenName[i] = letter;
            }
        }
        document.querySelector('#word').innerHTML = hiddenName.join(' ');
    }
}
}



