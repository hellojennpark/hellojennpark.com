<script lang="ts">
	import { writable } from 'svelte/store';

	// Filters with both Korean and English labels
	const filters = [
		{ label: '전체', key: 'all' },
		{ label: '레퍼런스', key: 'references' },
		{ label: '나', key: 'whoami' }
	];

	// Function to get the initial filter from URL
	function getInitialFilter() {
		if (typeof window !== 'undefined') {
			const urlParams = new URLSearchParams(window.location.search);
			const filterKey = urlParams.get('filter');
			if (filterKey && filters.some((filter) => filter.key === filterKey)) {
				return filterKey;
			}
		}
		return 'all'; // Default value if no valid filter in URL
	}

	// Store for managing the current filter
	const currentFilter = writable(getInitialFilter());

	// Update URL based on selected filter
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
			<!-- Show all accordion content here -->
		{:else if $currentFilter === 'communication'}
			<!-- Show filtered accordion content for 커뮤니케이션 -->
		{:else if $currentFilter === 'daily'}
			<!-- Show filtered accordion content for 일상 편의 -->
		{:else if $currentFilter === 'business'}
			<!-- Show filtered accordion content for 비즈니스 -->
		{:else if $currentFilter === 'shopping'}
			<!-- Show filtered accordion content for 쇼핑 -->
		{:else if $currentFilter === 'entertainment'}
			<!-- Show filtered accordion content for 엔터테인먼트 -->
		{:else if $currentFilter === 'social'}
			<!-- Show filtered accordion content for 소셜임팩트 -->
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
</style>
