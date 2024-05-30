<script>
	/**
	 * @type {any[]}
	 */
	export let events = [];
</script>

<div>
	<h1 class="subtitle">
		<img
			src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Calendar.png"
			alt="Calendar"
			width="60"
			height="60"
			style="margin-right: 0.5rem;"
		/>타임라인
	</h1>
</div>
<div class="timeline">
	{#each events as event, index}
		<div class="event {index === events.length - 1 ? 'last' : ''}">
			<div class="company">{event.company}<span class="jobtype">{event.jobtype}</span></div>
			<div class="role">{event.role}</div>
			<div class="team">{event.team}</div>
			<div class="date">{event.date}</div>
		</div>
		{index === events.length - 1 ? '' : '>'}
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		overflow-x: auto;
		white-space: nowrap;
		justify-content: center;
		align-items: center;
	}

	.event {
		background-color: rgba(243, 243, 243);
		padding: 20px;
		border-radius: 5px;
		display: inline-block;
		position: relative;
		margin: 20px 20px;
		text-align: left;
	}

	.event:first-child::before {
		display: none;
	}

	.event.last {
		background-color: rgba(255, 230, 0, 0.75);
	}

	.event .date {
		font-size: 1rem;
	}

	.event .company {
		font-size: 1.2rem;
		margin-bottom: 0.4rem;
	}

	.event .jobtype {
		margin-left: 0.2rem;
		font-size: 0.8rem;
	}

	.event .role {
		font-size: 1rem;
		margin-bottom: 0.4rem;
	}

	.event .team {
		font-size: 1rem;
		margin-bottom: 0.4rem;
	}
</style>
