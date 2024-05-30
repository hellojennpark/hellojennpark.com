<script>
	import { List, Li } from 'flowbite-svelte';
	import Timeline from '../../../components/Timeline.svelte';

	const events = [
		{
			company: 'ESTsecurity',
			jobtype: '현장실습',
			date: '2020년 7월 - 2021년 2월 · 8개월',
			role: 'DevOps Engineer',
			team: 'PMS-MPI Cell',
			descriptions: []
		},
		{
			company: 'PearlAbyss',
			jobtype: '정규직',
			date: '2021년 7월 - 2022년 12월 · 1년 6개월',
			role: 'Software Engineer',
			team: 'Platform Programming 1 Team',
			descriptions: []
		},
		{
			company: 'KakaoPay',
			jobtype: '정규직',
			date: '2022년 12월 - 현재 · 1년 6개월',
			role: 'Software Engineer',
			team: 'SRE Team Release Engineering Part',
			descriptions: []
		}
	];
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Jersey+10+Charted&display=swap"
		rel="stylesheet"
	/>
	<title>Yejin Park (Career)</title>
	<meta name="description" content="커리어" />
</svelte:head>

<div>
	<Timeline {events} />
	<div>
		<h1 class="subtitle">
			<img
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png"
				alt="Bookmark Tabs"
				width="60"
				height="60"
				style="margin-right: 0.5rem;"
			/>경력사항
		</h1>
	</div>
	<div class="white-box">
		{#each events.slice().reverse() as event, index}
			<div>
				<p class="bolder">{index + 1}.{event.company}</p>
				<List list="decimal">
					<Li><p>{event.role}, {event.team}</p></Li>
					<Li><p>{event.date}</p></Li>
					{#each event.descriptions as description}
						<Li><p>{description}</p></Li>
					{/each}
				</List>
			</div>
		{/each}
	</div>
</div>

<style>
	.bolder {
		font-weight: 800;
		font-size: 1.5rem;
	}
</style>
