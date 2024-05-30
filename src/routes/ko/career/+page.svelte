<script>
	// @ts-nocheck

	import { List, Li } from 'flowbite-svelte';
	import Timeline from '../../../components/Timeline.svelte';

	const events = [
		{
			company: 'ESTsecurity',
			jobtype: '현장실습',
			date: '2020년 7월 - 2021년 2월 · 8개월',
			role: 'DevOps Engineer',
			team: 'PMS-MPI Cell',
			descriptions: [
				{
					description: '파이썬 크롤러 최적화',
					detail:
						'애플리케이션 수집 시간 3시간 -> 30분 미만으로 80% 이상 단축, 에러 처리 및 알림 시스템 추가로 실패 비율 50% -> 10% 이하로 감소'
				},
				{
					description: '애플리케이션 버전 검증 자동화',
					detail: '1차 검증 자동화, 검증 시간 1시간 -> 최종 검토 10분 이하로 감소'
				},
				{
					description: '뉴스 크롤러 기반 보고서 생성 자동화',
					detail: '뉴스 필터링 및 보고서 생성 및 공유 자동화'
				}
			]
		},
		{
			company: 'PearlAbyss',
			jobtype: '정규직',
			date: '2021년 7월 - 2022년 12월 · 1년 6개월',
			role: 'Software Engineer',
			team: 'Platform Programming 1 Team',
			descriptions: [
				{ description: '운영 효율성을 높이고 테스트 프로세스를 단순화 하기 위한 도구 개발' },
				{ description: '소프트웨어 안정성을 위한 에러 감지 및 경고 시스템 구축' },
				{ description: '게임 엔진 성능 모니터링 및 알림 시스템 구축' },
				{
					description: 'Jenkins CI/CD 관리',
					detail:
						'jenkins library, pipeline 유지보수, 프로파일링을 통한 빌드/배포 소요시간 감소, 데이터 수집 및 대시보드 구축'
				},
				{
					description: '빌드 시스템 표준화',
					detail:
						'버전관리도구(Perforce, Gitlab, Visual SVN) 통합, 빌드 스크립트 통합(Python, Groovy, Shell Script), CI도구(Jenkins, 자체개발) 통합'
				}
			]
		},
		{
			company: 'KakaoPay',
			jobtype: '정규직',
			date: '2022년 12월 - 현재 · 1년 7개월',
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
				{
					description: '배포 생산성 향상과 커뮤니케이션 피로도를 낮추기 위한 자동화 시스템 구축',
					detail: '배포 생산성 향상으로 코어 타임 상시 배포 인원 10명에서 3명으로 감소함'
				},
				{
					description: '성능테스트존 구축 및 어드민 웹 개발',
					detail: '성능테스트 환경(쿠버네티스 클러스터)을 10초 내에 전개한다'
				},
				{
					description: '전사 Mocking Platform 개발',
					detail: '2024년 5월 기준, 24개팀이 50개 목 서버를 생성함. 최대 7000TPS까지 지원함'
				},
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
	<p class="subtitle">
		<img
			src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Loudspeaker.png"
			alt="Loudspeaker"
			width="25"
			height="25"
			style="margin-right: 0.5rem;"
		/>
		각 프로젝트에 대한 세부 내용은
		<a style="margin-left: 0.4rem;" href="/ko/project">프로젝트</a>에서 확인해주세요
	</p>
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
								{#if item.detail}
									<pre>{item.detail}</pre>
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

	pre {
		font-size: 0.8rem;
	}
</style>
