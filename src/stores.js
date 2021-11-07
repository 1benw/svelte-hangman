import { writable, derived, readable } from 'svelte/store';
import wordList from './wordList.json';

let allWords = [];
for (const theme of wordList) {
    allWords = [...allWords, ...theme.words];
}

wordList.push({
    theme: 'all',
    name: 'All Themes 🔗',
    words: allWords,
});

export const wordThemes = readable(wordList.sort((a, b) => a.name.localeCompare(b.name)));

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
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        add: (l) => update(letters => [...letters, l]),
        reset: () => set([]),
    }
};

export const guessedLetters = createGuessedLetters();

function createGameDataStore() {
    const { subscribe, set, update } = writable({});

    return {
        subscribe,
        set: (key, value) => update(data => {
            return { ...data, [key]: value };
        }),
        clear: (key) => update(data => {
            return { ...data, [key]: null };
        }),
        reset: () => set({}),
    }
}

export const gameData = createGameDataStore();

export const revealedWord = derived([word, guessedLetters], ([$word, $guessedLetters]) => {
    let rWord = '';
    if ($word) {
        for (const letter of $word) {
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

        return true;
    } else {
        return false;
    }
});

export function resetGameStores() {
    word.reset();
    remainingLives.reset();
    guessedLetters.reset();
};