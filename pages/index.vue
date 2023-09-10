<script setup>
	const coordinates = {
		treviFountain: 'pb=!4v1694353007893!6m8!1m7!1sCAoSLEFGMVFpcE9iUDVzdmlOSnZ1WjhPQ29SQ2lYVHRJd2ZBOGl6QzhCWFFxUDl1!2m2!1d41.9009325!2d12.4833132!3f1.502901934577892!4f6.200202576290295!5f1.788286995916537'
	};

	const mapUrl = `https://www.google.com/maps/embed?${coordinates.treviFountain}`;

	function throwCoins() {
		console.log('Throw Coins');
	}
</script>

<template>
	<main>
		<div class="screen">
			<iframe
				class="map"
				:src="mapUrl"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>

		<div class="ui">
			<button
				class="throw"
				@click="throwCoins"
			>&gt;&gt; Throw coins &lt;&lt;</button>
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	display: flex;
	justify-content: center;
	.screen {
		width: 100vw;
		height: 100vh;
		.map {
			width: 100%;
			height: 100%;
		}
	}

	.ui {
		position: absolute;
		left: 50%;
		top: 70%;
		transform: translateX(-50%);
		.throw  {
			width: 20vw;
			height: 10vw;
			background-color: #eb6100;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1rem;
			filter: drop-shadow(0 0 4px white);
			border: 2px solid #fff;
			border-radius: 10px;
			font-weight: bold;

			&:hover {
				background-color: #f56500;
			}
		}
	}
}
</style>
