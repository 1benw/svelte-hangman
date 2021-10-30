<script>
    import { fade } from 'svelte/transition';
</script>

<div class="overlay" transition:fade>
    <div class="container">
        <slot></slot>
    </div>
</div>


<style lang="less">
    @import '../theme.less';

    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #0a0a0abd;

        .container {
            position: fixed;
            top: 50%;
            left: 50%;

            width: 65%;
            height: 70%;

            transform: translate(-50%, -50%);

            background-color: @gray-darker;
            border-radius: 10px;
            box-shadow: -2.5px 2.5px 10px rgb(8, 8, 8);
            padding: 2.5%;
        }
    }
</style>
