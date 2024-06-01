<script>
	export let id;
	export let icon;
	export let imageUrl;
	export let alt;
	/**
	 * @type {string | any[]}
	 */
	export let tags = [];
	export let label;
</script>

<div class="card">
	<div class="header">
		<img class="icon" src={icon} {alt} />
		<div class="label">{label}</div>
	</div>
	<div class="content">
		<div>
			{#if tags.length > 0}
				{#each tags as tag}
					<span class="tag">#{tag}</span>
				{/each}
			{/if}
		</div>
		<div class="image-container">
			<img src={imageUrl} {alt} />
		</div>
	</div>
</div>

<style>
	.card {
		width: 300px;
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		/* flex: 0 0 calc(33.33% - 20px); */
	}
	.header {
		display: flex;
		align-items: center;
		background-color: #f9f9f9;
		padding: 10px;
	}
	.header img {
		width: 24px;
		height: 24px;
		margin-right: 8px;
	}
	.header .label {
		font-weight: bold;
	}
	.content {
		padding: 16px;
	}
	.tag {
		padding: 2.5%;
		margin-right: 5%;
		font-size: 12px;
		color: #555;
		background-color: #f0f0f0;
	}
	.image-container {
		background-color: #2c3e50;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
	.image-container img {
		width: 100%;
		height: 100%;
	}
</style>
