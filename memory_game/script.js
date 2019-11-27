class MusicBox {
    constructor() {
        this.victorySound = new Audio('./assets/sounds/victory.mp3');
        this.gameOverSound = new Audio('./assets/sounds/game_over.mp3');
        this.matchSound = new Audio('./assets/sounds/match.mp3');
        this.flipSound = new Audio('./assets/sounds/flip_sound.mp3');
        this.backgroundMusic = new Audio('./assets/sounds/background.mp3');
        this.backgroundMusic.volume = 0.3;
        this.backgroundMusic.loop = true;
    }
    playMusic() {
        this.backgroundMusic.play();
    }
    stopMusic() {
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;
    }
    victory() {
        this.victorySound.play();
    }
    gameOver() {
        this.gameOverSound.play();
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play()
    }
}

class Matcher {
    constructor(totalTime, cards) {
        this.cards = cards;
        this.totalTime = totalTime;
        this.remainingTime = totalTime;
        this.musicBox = new MusicBox();
        this.timer = document.querySelector('#timer');
        this.flipsCount = document.querySelector('#flips');
        this.firstCard = null;
        this.secondCard = null;
        this.hasFlippedCard = false;
        this.lockCards = false;
    }
    startGame() {
        this.remainingTime = this.totalTime;
        this.flipsCount = 0;
        this.musicBox.playMusic();
    }

    //Refactor divide by funcs
    flipCard(card) {
        if (this.lockCards) {
            return;
        }
        this.musicBox.flip();
        card.classList.add('visible');

        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = card;
            console.log(this.hasFlippedCard, this.firstCard);
        } else {
            this.hasFlippedCard = false;
            this.secondCard = card;
            this.lockCards = true;
            console.log(this.hasFlippedCard, this.secondCard);
            if (this.firstCard.querySelector('.card-value').src ===
                this.secondCard.querySelector('.card-value').src) {
                console.log('I am here');

                this.musicBox.match();
                this.firstCard.removeEventListener('click', this.flipCard)
                this.secondCard.removeEventListener('click', this.flipCard)
                this.lockCards = false;
            } else {
                setTimeout(() => {
                    this.firstCard.classList.remove('visible');
                    this.secondCard.classList.remove('visible');
                    this.lockCards = false;
                }, 1000);

            }
        }
    }
}

document.addEventListener('DOMcontentLoaded', game());

function game() {
    const overlays = Array.from(document.querySelectorAll('.overlay-text'));
    const cards = Array.from(document.querySelectorAll('.card'));

    let matcher = new Matcher(100, cards);


    overlays.forEach(text => text.addEventListener('click', () => {
        text.classList.remove('visible');
        matcher.startGame();
    }));
    cards.forEach(card => card.addEventListener('click', () => matcher.flipCard(card)));
}






// document.querySelectorAll('.card').forEach((card) => card.addEventListener('click', card => card.classList.toggle('visible')))






// function shuffle(){
//     let cards = Array.from(document.querySelectorAll('.card'));
//     for (let i = cards.length; i < 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i+1));
//         card[randomIndex].style.order = i;
//         cards[i].style.order = randomIndex;
//     }
// }
