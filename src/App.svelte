<script>
	import { fade } from 'svelte/transition';
	import { Word, Hangman, SplashScreen, Popover, Results, UsedLetters } from './components';
	import { remainingLives, word, revealedWord, fullyRevealedWord, gameData } from './stores';
	import { handleKeydown } from './hangman';

</script>

<svelte:window on:keydown={handleKeydown}  />

{#if $gameData.active}
	<main transition:fade>
		<div class="game-info">
			<p><b>Current Theme: </b>{$gameData.theme.name}</p>
		</div>
		<div class="word">
			<Word word={$revealedWord} />
		</div>
		<div class="hangman">
			<Hangman remaining={$remainingLives} />
			<UsedLetters />
		</div>
		{#if $gameData.complete}
			<Popover>
				<Results win={$gameData.results.won} />
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
		text-align: center;
		background-color: @background;
		color: @white;
	}

	.game-info {
		height: 5%;
		padding: 20px;

		p {
			font-size: 20px;
			margin: 0;
		}
	}

	.hangman {
		display: flex;
		flex-direction: column;
		height: 60%;
		width: 100%;
	}

	.word {
		height: 15%;
	}

</style>