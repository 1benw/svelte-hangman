<script>
    import { wordThemes } from '../stores';
    import { startNewGame } from '../hangman';
    import { Word } from './';

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
        <button class="regularButton backButton" on:click={toggleThemeView}>Go Back</button>
    {:else}
        <button class="regularButton" on:click={toggleThemeView}>Play!</button>
    {/if}
</div>


<style lang="less">
    @import '../theme.less';


    .container {
        height: 80%;
        width: 90%;
        margin: auto;
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

    .backButton {
        width: 75%;
    }
</style>