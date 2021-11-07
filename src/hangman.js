import { get } from 'svelte/store';
import { wordThemes, word, guessedLetters, remainingLives, fullyRevealedWord, resetGameStores, gameData } from './stores';

export function startNewGame(theme = 'all') {
    if (get(word)) {
        resetGameStores();
    };

    const themes = get(wordThemes);
    const targetTheme = themes.find(t => t.theme === theme);

    const newWord = targetTheme.words[Math.floor(Math.random() * targetTheme.words.length)].toUpperCase();

    word.set(newWord);
    gameData.set('complete', false);
    gameData.set('theme', {
        theme: targetTheme.theme,
        name: targetTheme.name,
    });

    console.log('New Game: ', newWord);

    gameData.set('active', true);
}

export function mainMenu() {
    gameData.set('active', false);
    gameData.set('complete', false);
};

export function handleKeydown(e) {
    const currentWord = get(word);

    if (currentWord) {
        if (get(remainingLives) > 0 && !get(fullyRevealedWord)) {
            const newGuess = e.key.toUpperCase();
            if (newGuess.length === 1 && (/[A-Z]/).test(newGuess)) {
    
                if (!get(guessedLetters).includes(newGuess)) {
    
                    if (!currentWord.includes(newGuess)) {
                        remainingLives.decrement();
                    }
    
                    guessedLetters.add(newGuess);
                }
            }
        }
    } else {
        console.log('Game not in progress');
    }
}

function finishGame(won) {
    gameData.set('complete', true);
    gameData.set('results', {
        won: won,
        remainingLives: get(remainingLives),
        word: get(word),
    });
}

fullyRevealedWord.subscribe((revealed) => {
    if (revealed) {
        finishGame(true);
    }
});

remainingLives.subscribe((remaining) => {
    if (remaining <= 0) {
        finishGame(false);
    }
})
