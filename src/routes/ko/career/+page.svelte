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
			descriptions: [
				{
					description: '운영 효율성을 높이고 업무 프로세스를 단순하게 만들기위한 도구 개발',
					links: [
						{
							title: '뉴스기사 (배포봇)',
							url: 'https://www.etnews.com/20230724000204#'
						}
					]
				},
				{ description: '업무 생산성 향상과 업무 피로도를 낮추기 위한 자동화 시스템 구축' },
				{
					description: '기술 블로그 작성 및 내부 개발자 행사 발표',
					links: [
						{
							title: '기술블로그(배포 효율화를 위한 자동화 슬랙봇 개발)',
							url: 'https://tech.kakaopay.com/post/slack-bot-improving-operational-efficiency/'
						},
						{
							title: '발표후기(업무 효율화 - 배포 업무 효율화)',
							url: 'https://tech.kakaopay.com/post/2023-july-kakaopay-developer-festival/#%ED%95%A8%EA%BB%98-%EB%82%98%EB%88%84%EA%B8%B0%EB%B2%A0%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%9E%99%ED%8B%B0%EC%8A%A4'
						}
					]
				}
			]
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
					{#each event.descriptions as item}
						<Li
							><p>
								{item.description}
								{#if item.links}
									{#each item.links as link}
										<a
											href={link.url}
											target="_blank"
											style="margin-left: 0.5rem; margin-right: 0.5rem;">🔗 {link.title}</a
										>
									{/each}
								{/if}
							</p></Li
						>
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
