<script>
	  import { List, Li } from 'flowbite-svelte';
</script>
<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Jersey+10+Charted&display=swap" rel="stylesheet">
	<title>Yejin Park (Home)</title>
	<meta name="description" content="About this app" />
</svelte:head>


<div>
	<h1 class="jersey-10-charted-regular">Hello, World!_</h1>
	<div class="white-box">
		<p class="bolder">WHO AM I</p>
		<List list="decimal">
			<Li><p>👩‍💻 <strong>사용자 경험</strong>을 가장 중요하게 생각하는 4년차 소프트웨어 엔지니어입니다.</p></Li>
			<Li><p>📈 함께 일하는 동료들의 <strong>업무 효율성</strong>과 <strong>생산성</strong> 향상을 목표로 일합니다.</p></Li>
			<Li><p>🏃‍♀️ 주도적이고 자율적으로 일합니다.</p></Li>
			<Li><p>🌏 새롭고 다양한 환경에서 설렘을 느낍니다.</p></Li>
		</List>
		<p class="bolder">KEY STRENGTHS</p>
		<List list="decimal">
			<Li><p>사용자 경험을 가장 중요하게 생각합니다. 사용자의 입장에서 문제를 정의하고, 해결 방법을 고민합니다.</p></Li>
			<Li><p>새로운 기술을 배우고, 활용하는 것을 좋아합니다. 목적에 따라 다양한 도구를 사용하는 것에 열려있습니다.</p></Li>
			<Li><p>지속적인 사용자의 피드백을 바탕으로 도구를 반복적으로 개선하고 유지하는데 능숙합니다.</p></Li>
			<Li><p>문제 해결을 최우선으로 두고, 상황에 맞게 도구를 가볍게 사용할 수도 있고, 필요하면 깊이 파고들어 해결책을 찾을 수도 있습니다.</p></Li>
		</List>
	</div>
</div>


<style>
	.jersey-10-charted-regular {
		font-family: "Jersey 10 Charted", sans-serif;
		font-weight: 400;
		font-style: normal;
		user-select: none; /* 텍스트 선택 비활성화 */
		cursor: default; /* 기본 커서로 변경 */
	}

	.bolder {
		font-weight: 800;
		font-size: 1.25rem;
	}


</style>