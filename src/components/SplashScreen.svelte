<script>
    import { wordThemes } from '../stores';
    import { startNewGame } from '../hangman';
    import { Word, Hangman } from './';

    let viewingThemes = false;
    function toggleThemeView() {
        viewingThemes = !viewingThemes;
    };

</script>

<div class="container">
    <Word word="Hangman" />
    {#if viewingThemes}
        <div class="themeSelect">
            {#each $wordThemes as theme}
                {#if theme.theme === 'all'}
                    <button class="regularButton all" on:click={startNewGame(theme.theme)}>{theme.name}</button>
                {:else}
                    <button class="regularButton" on:click={startNewGame(theme.theme)}>{theme.name}</button>
                {/if}
            {/each}
        </div>
        <button class="regularButton" style="width: 75%;" on:click={toggleThemeView}>Go Back</button>
    {:else}
        <div>
            <Hangman remaining={0} />
            <button class="regularButton play" on:click={toggleThemeView}>Play!</button>
        </div>
    {/if}
</div>


<style lang="less">
    @import '../theme.less';

    .container {
        height: 80%;
        width: 90%;
        margin: auto;
    }

    .play {
        margin-top: 5%;
        width: 30%;
        animation: pulse 1s infinite;
        transition: 0.5s;
        font-size: 30px;
    }

    .themeSelect {
        display: flex;
        height: 75%;
        width: 100%;

        overflow-x: none;
        overflow-y: auto;

        flex-wrap: wrap;
        flex-grow: 1;
        align-items: center;
        justify-content: center;

        button {
            height: 15%;
            width: 15%;
            margin: 2.5%;

            &.all {
                width: 32.5%;
            }
        }
    }


    @keyframes pulse {
        0% {
            transform: scale(0.9);
        }

        70% {
            transform: scale(1.0);
        }

        100% {
            transform: scale(0.9);
        }
    }
</style>