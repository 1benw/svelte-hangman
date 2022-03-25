<script>
    export let remaining = 7;

    function hasRemainingLives(remaining, lives) {
        return (remaining > lives) && 'hidden';
    }

</script>

<div>
    <svg>
        <g id="body">
            <g id="head">
                <circle class={hasRemainingLives(remaining, 6)} cx="50%" cy="24%" r="7.5%" fill="transparent"/> <!-- The Head -->

                <g class={hasRemainingLives(remaining, 0)}> <!-- The Eyes -->
                    <line class="eyes" x1="47.5%"  y1="21%"  x2="49%"    y2="23%" />
                    <line class="eyes" x1="47.5%"  y1="23%"  x2="49%"    y2="21%" />

                    <line class="eyes" x1="51%"    y1="21%"  x2="52.5%"  y2="23%" />
                    <line class="eyes" x1="51%"    y1="23%"  x2="52.5%"  y2="21%" />
                </g>
            </g>
            <line class={hasRemainingLives(remaining, 5)} x1="50%" y1="33%"   x2="50%" y2="58%" /> <!-- Body -->
            <line class={hasRemainingLives(remaining, 4)} x1="50%" y1="40%"   x2="40%" y2="45%" /> <!-- Left Arm -->
            <line class={hasRemainingLives(remaining, 3)} x1="50%" y1="40%"   x2="60%" y2="45%" /> <!-- Right Arm -->
            <line class={hasRemainingLives(remaining, 2)} x1="50%" y1="57.5%" x2="42%" y2="72%" /> <!-- Left Leg -->
            <line class={hasRemainingLives(remaining, 1)} x1="50%" y1="57.5%" x2="58%" y2="72%" /> <!-- Right Leg -->
        </g>

        <line x1="7.5%"     y1="95%"    x2="75%"    y2="95%" /> <!-- Base -->
        <line x1="20.5%"    y1="4.5%"   x2="20.5%"  y2="95%" />
        <line x1="20.5%"    y1="5%"     x2="50.5%"  y2="5%" />
        <line x1="50%"      y1="5%"     x2="50%"    y2="15%" class={hasRemainingLives(remaining, 6)} /> <!-- Rope -->
    </svg>
</div>


<style lang="less">
    @import '../theme.less';

    svg {
        height: 40vh;
        width: 35vw;
        margin-bottom: 2.5%;
    }

    line, circle {
        stroke: @black;
        stroke-width: 4.5px;
        transition: .75s;
    }

    .eyes {
        stroke: @blood;
        stroke-width: 2px;
    }

    .hidden {
        stroke: transparent;
        visibility: hidden;
    }

</style>