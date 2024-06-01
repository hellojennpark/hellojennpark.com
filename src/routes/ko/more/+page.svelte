<script lang="ts">
	import Subtitle from './Subtitle.svelte';
	import Card from './Card.svelte';

	import { writable } from 'svelte/store';

	const filters = [
		{ label: 'All', key: 'all' },
		{ label: 'References', key: 'references' },
		{ label: 'Who am I?', key: 'whoami' }
	];

	const cards = [
		{
			id: 1,
			icon: '/images/studio_microphone.png',
			imageUrl: '/images/article.png',
			alt: 'article',
			tags: ['references'],
			label: '뉴스 기사'
		},
		{
			id: 2,
			icon: '/images/pencil.png',
			imageUrl: '/images/deploy_efficiency.png',
			alt: 'techblog',
			tags: ['references'],
			label: '기술블로그 포스팅'
		},
		{
			id: 3,
			icon: '/images/studio_microphone.png',
			imageUrl: '/images/ari_speaking.png',
			alt: 'public speaking',
			tags: ['references'],
			label: '내부 개발자 컨퍼런스 발표 후기'
		}
	];

	function getInitialFilter() {
		if (typeof window !== 'undefined') {
			const urlParams = new URLSearchParams(window.location.search);
			const filterKey = urlParams.get('filter');
			if (filterKey && filters.some((filter) => filter.key === filterKey)) {
				return filterKey;
			}
		}
		return 'all';
	}

	const currentFilter = writable(getInitialFilter());

	$: $currentFilter, setFilter($currentFilter);

	function setFilter(filter: string) {
		if (typeof window !== 'undefined') {
			const url = new URL(window.location.href);
			url.searchParams.set('filter', filter);
			window.history.pushState({}, '', url);
		}
	}

	// Find the current filter object
	$: selectedFilter = filters.find((f) => f.key === $currentFilter);
</script>

<div class="container">
	<div class="buttons">
		{#each filters as filter}
			<button
				class="button {filter.key === $currentFilter ? 'selected' : ''}"
				on:click={() => currentFilter.set(filter.key)}
				type="button"
				aria-pressed={filter.key === $currentFilter}
			>
				{filter.label}
			</button>
		{/each}
	</div>

	<div>
		{#if $currentFilter === 'all'}
			<div class="layout">
				{#each cards as card}
					<Card {...card} />
				{/each}
			</div>
		{:else if $currentFilter === 'references'}
			<Subtitle
				label="References"
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Card%20File%20Box.png"
				alt="Reference Icon"
			/>
			<!-- Show references accordion content here -->
		{:else if $currentFilter === 'whoami'}
			<Subtitle
				label="Who am I?"
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Squinting%20Face.png"
				alt="Grinning Squinting Face"
			/>
		{/if}
	</div>
</div>

<style>
	.buttons {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
	}
	.button {
		padding: 10px;
		border: none;
		border-radius: 20px;
		background-color: #f0f0f0;
		cursor: pointer;
	}
	.selected {
		background-color: black;
		color: white;
	}

	.layout {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
