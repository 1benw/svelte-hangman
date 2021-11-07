<script>
    import { guessedLetters } from '../stores';
    import { Letter }  from './'
</script>

<h2>Used Letters</h2>
<div class="container">
    {#each $guessedLetters as letter}
        <Letter letter={letter} />
    {/each}
</div>


<style lang="less">
    @import '../theme.less';

    .container {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
