class MusicBox {
    constructor() {
        this.victorySound = new Audio('./assets/sounds/victory.mp3');
        this.gameOverSound = new Audio('./assets/sounds/game_over.mp3');
        this.matchSound = new Audio('./assets/sounds/match.mp3');
        this.flipSound = new Audio('./assets/sounds/flip_sound.mp3');
        this.backgroundMusic = new Audio('./assets/sounds/background.mp3');
        this.backgroundMusic.volume = 0.1;
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
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
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
        this.timerDisplay = document.querySelector('#timer');
        this.flipsDisplay = document.querySelector('#flips');
        this.flipsCount = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.hasFlippedCard = false;
        this.lockCards = false;
        this.matchesCount = 0;
        this.matchesArray = [];
    }
    startGame() {
        this.hideCards();
        this.timerDisplay.innerText = this.totalTime;
        this.flipsDisplay.innerText = 0;
        this.matchesArray = [];
        this.remainingTime = this.totalTime;
        this.flipsCount = 0;
        this.matchesCount = 0;
        [this.firstCard, this.secondCard] = [null, null];
        this.musicBox.playMusic();
        this.shuffle();
        this.timer = this.startTimer();
    }

    flipCard(card) {
        if (this.lockCards || this.firstCard === card || this.matchesArray.includes(card)) {
            return;
        }

        card.classList.add('visible');
        this.musicBox.flip();
        this.flipsCount++;
        this.flipsDisplay.innerText = this.flipsCount;

        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = card;
        } else {
            this.hasFlippedCard = false;
            this.secondCard = card;
            this.matchCheck();
        }
    }

    matchCheck() {
        this.firstCard.querySelector('.card-value').src === this.secondCard.querySelector('.card-value').src ?
            this.removeListenersAddMatch() : this.flipBack();
    }
    removeListenersAddMatch() {
        // this.firstCard.removeEventListener('click', this.flipCard);
        // this.secondCard.removeEventListener('click', this.flipCard);
        this.musicBox.match();
        this.firstCard.classList.add('matched');
        this.secondCard.classList.add('matched');
        this.matchesArray.push(this.firstCard, this.secondCard);
        ++this.matchesCount === 8 ? this.victory() : null
    }
    flipBack() {
        this.lockCards = true;
        setTimeout(() => {
            this.firstCard.classList.remove('visible');
            this.secondCard.classList.remove('visible');
            this.lockCards = false;
        }, 1000);
    }
    shuffle() {
        const cardsLength = this.cards.length - 1;
        for (let i = cardsLength; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cards[randomIndex].style.order = i;
            this.cards[i].style.order = randomIndex + 1;
        }
    }
    startTimer() {
        return setInterval(() => {
            this.remainingTime--;
            this.timerDisplay.innerText = this.remainingTime;
            if (this.remainingTime === 0) {
                this.gameOver();
            }
        }, 1000);
    }
    victory() {
        clearInterval(this.timer);
        this.musicBox.victory();
        document.querySelector('#victory').classList.add('visible');
    }
    gameOver() {
        clearInterval(this.timer);
        this.musicBox.gameOver();
        document.querySelector('#game-over').classList.add('visible');
    }
    hideCards() {
        this.cards.forEach((card) => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
}

document.addEventListener('DOMcontentLoaded', game());

function game() {
    const overlays = Array.from(document.querySelectorAll('.overlay-text'));
    const cards = Array.from(document.querySelectorAll('.card'));

    let matcher = new Matcher(60, cards);


    overlays.forEach(text => text.addEventListener('click', () => {
        text.classList.remove('visible');
        matcher.startGame();
    }));



    cards.forEach(card => card.addEventListener('click', () => matcher.flipCard(card)));
}


