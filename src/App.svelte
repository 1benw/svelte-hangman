<script>
	import { fade } from 'svelte/transition';
	import { Word, Hangman, SplashScreen, Popover, Results } from './components';
	import { remainingLives, word, revealedWord, fullyRevealedWord } from './stores';
	import { handleKeydown } from './hangman';

</script>

<svelte:window on:keydown={handleKeydown}  />

<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

{#if $word}
	<main transition:fade>
		<div class="word-row">
			<Word word={$revealedWord} />
		</div>
		<div class="top-row">
			<Hangman remaining={$remainingLives} />
		</div>
		Remaining Lives: {$remainingLives} {$word} {$fullyRevealedWord}
		{#if $remainingLives <= 0 || $fullyRevealedWord}
			<Popover>
				<Results win={$fullyRevealedWord} />
			</Popover>
		{/if}
	</main>
	{:else}
	<main transition:fade>
		<SplashScreen />
	</main>
{/if}


<style lang="less">
	@import './theme.less';

	main {
		position: fixed;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		//background-color: @background;
		text-align: center;
		color: @white;
	}

	.top-row {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: row;
	}

	.hangman {
		height: 50%;
	}

	.word-row {
		height: 20%;
	}

	.bg {
		position: fixed;

		top: 0;
		bottom: 0;
		left: -50%;
		right: -50%;

		animation: slide 4s ease-in-out infinite alternate;
		background-image: linear-gradient(-60deg, rgb(0, 101, 169) 50%, rgb(20, 0, 90) 50%);

		opacity: .5;
		z-index: -1;

		&.bg2 {
			animation-direction: alternate-reverse;
			animation-duration: 5s;
		}

		&.bg3 {
			animation-duration: 6s;
		}
	}

	@keyframes slide {
		0% {
			transform:translateX(-25%);
		}
		100% {
			transform:translateX(25%);
		}
	}

</style>