import { get } from 'svelte/store';
import { word, guessedLetters, remainingLives, fullyRevealedWord, resetGameStores } from './stores';

export function generateWord() {
    const generatedWord = 'Bread';

    return generatedWord.toUpperCase();
}

export function startNewGame() {
    if (get(word)) {
        resetGameStores();
    };

    const newWord = generateWord();

    word.set(newWord);
}

export function handleKeydown(e) {
    const currentWord = get(word);

    if (currentWord && get(remainingLives) > 0 && !get(fullyRevealedWord)) {
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
}