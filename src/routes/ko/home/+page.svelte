<script>
	  import { List, Li, Heading } from 'flowbite-svelte';
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
			<Li><p>⏰ 함께 일하는 동료들의 <strong>업무 효율성</strong>과 <strong>생산성</strong> 향상을 목표로 일하고 있습니다.</p></Li>
			<Li><p>😍 주도적이고 자율적으로 일 할 수 있는 환경을 선호합니다.</p></Li>
			<Li><p>🌏 새롭고 다양한 환경에서 설렘을 느낍니다.</p></Li>
		</List>
		<p class="bolder">KEY STRENGTHS</p>
		<List list="decimal">
			<Li><p>Design</p></Li>
			<Li><p>Design</p></Li>
			<Li><p>Design</p></Li>
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