<script>
    import { onMount } from 'svelte';
    export let letter = '_';

    onMount(async () => {
        letter = String(letter).slice(0, 1).toUpperCase();
    });
</script>

{#if letter === ' '}
    <div class="space"></div>
{:else}
    <div class="letter">
        {letter}
    </div>
{/if}


<style lang="less">
    @import '../theme.less';

    .letter {
        background-color: @gray-dark;
        color: @white;
        padding: 15px 20px;
        width: fit-content;
        height: fit-content;
        font-size: 30px;
        border-radius: 10px;
        margin: auto 0;
        user-select: none;
    }

    .space {
        width: 35px;
    }
</style>
