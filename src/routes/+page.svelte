<script lang="ts">
	    function redirectToLanguage(language: string) {
        if (language === 'en') {
            window.location.href = '/en/home';
        } else if (language === 'ko') {
            window.location.href = '/ko/home';
        }
    }
</script>

<svelte:head>
	<title>Yejin Park (Choose your language)</title>
	<meta name="description" content="Home" />
</svelte:head>

<section>
	<h1>
		Welcome! 
	</h1>
	<h2>Please choose your preferred language.</h2>
    <div class="button-container">
        <button on:click={() => redirectToLanguage('en')}>English</button>
        <button on:click={() => redirectToLanguage('ko')}>한국어</button>
    </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.button-container {
        display: flex;
        gap: 15px;
    }

    button {
        background-color: #333;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #555;
    }
</style>
