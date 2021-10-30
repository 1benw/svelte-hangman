import { writable, derived } from 'svelte/store';

export const defaultLives = 8;

function createWord() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        set,
        update,
        reset: () => set(false),
    }
};

export const word = createWord();

function createRemainingLives() {
    const { subscribe, set, update } = writable(defaultLives);

    return {
        subscribe,
        decrement: () => update(x => Math.max(0, x - 1)),
        reset: () => set(defaultLives),
    }
};

export const remainingLives = createRemainingLives();

function createGuessedLetters() {
    const { subscribe, set, update } = writable(Array());

    return {
        subscribe,
        add: (l) => update(letters => [...letters, l]),
        reset: () => set(Array()),
    }
};

export const guessedLetters = createGuessedLetters();

export const revealedWord = derived([word, guessedLetters], ([$word, $guessedLetters]) => {
    let rWord = '';
    if ($word) {
        for (const letter of $word) {
            console.log($guessedLetters)
            if ($guessedLetters.includes(letter) || letter === ' ') {
                rWord += letter;
            } else {
                rWord += '_';
            }
        }
    }

    return rWord;
});

export const fullyRevealedWord = derived([word, guessedLetters], ([$word, $guessedLetters]) => {
    if ($word) {
        for (const letter of $word) {
            if (!$guessedLetters.includes(letter) && letter !== ' ') {
                return false;
            }
        }
    }

    return true;
});

export function resetGameStores() {
    word.reset();
    remainingLives.reset();
    guessedLetters.reset();
};