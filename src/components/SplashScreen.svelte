<script>
    import { startNewGame } from '../hangman';
    import { Word } from './';

</script>

<div class="container">
    <Word word="Hangman" />
    <button on:click={startNewGame}>Play!</button>
</div>


<style lang="less">
    @import '../theme.less';


    .container {
        height: 80%;
        width: 90%;
        margin: auto;
    }
</style>