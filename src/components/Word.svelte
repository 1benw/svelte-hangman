<script>
    import Letter from './Letter.svelte';
    export let word = 'Eggs';
</script>

<div>
    {#each word as i}
        <Letter letter={i} />
    {/each}
</div>

<style lang="less">
    @import '../theme.less';

    div {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        gap: 10px;
        padding: 3.5% 2.5% 3.5% 2.5%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
