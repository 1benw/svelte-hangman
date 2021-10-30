<script>
    import confetti from 'canvas-confetti';
    import { onMount } from 'svelte';
    import { word, remainingLives } from '../stores';
    import { startNewGame } from '../hangman';
    export let win = true;

    onMount(() => {
        if (win) {
            confetti({
                spread: 80,
                particleCount: 70,
                origin: {
                    x: 0.5,
                    y: 0.8,
                }
            });
        }
    });
</script>

<div>
    {#if win}
        <h1>You Won!</h1>
        <div class="emoji">
            <span>🏆</span>
        </div>
    {:else}
        <h1>You Lost!</h1>
        <div class="emoji">
            <span>😵</span>
        </div>
    {/if}
    <div class="info">
        {#if win}
            <p>You Guessed the Word Correctly!</p>
        {:else}
            <p>You Failed to Guess the Word...</p>
        {/if}
        <br>

        <p>Word: <b>{$word.toLowerCase()}</b></p>
        <p>Lives Remaining: <b>{$remainingLives}</b></p>
    </div>

    <div class="buttons">
        <button on:click={startNewGame}>Play Again</button>
        <button on:click={startNewGame}>Main Menu</button>
    </div>

</div>

<style lang="less">
    @import '../theme.less';

    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        .emoji {
            height: 30%;
            span {
                font-size: 70px;
                animation: pulse 1s infinite;
                transition: 0.5s;
            }
        }

        .info {
            height: 40%;
            p {
                margin: 0;
                font-size: 20px;
                text-transform: capitalize;
            }
        }

        .buttons {
            height: 15%;
            display: flex;
            flex-direction: row;
            button {
                width: 45%;
                margin: 0 2.5%;
            }
        }
    }


    @keyframes pulse {
        0% {
            font-size: 65px;
        }

        70% {
            font-size: 75px;
        }

        100% {
            font-size: 65px;
        }
    }
</style>
