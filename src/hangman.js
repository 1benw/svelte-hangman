import { get } from 'svelte/store';
import { wordThemes, word, guessedLetters, remainingLives, fullyRevealedWord, resetGameStores } from './stores';

export function generateWord(theme = 'all') {
    const themes = get(wordThemes);
    const targetTheme = themes.find(t => t.theme === theme);

    const generatedWord = targetTheme.words[Math.floor(Math.random() * targetTheme.words.length)];
    return generatedWord.toUpperCase();
}

export function startNewGame(theme) {
    if (get(word)) {
        resetGameStores();
    };

    const newWord = generateWord(theme);

    word.set(newWord);
}

export function mainMenu() {
    if (get(word)) {
        resetGameStores();
    };
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