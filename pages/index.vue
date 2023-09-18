<script setup>
	const coordinates = {
		treviFountain: 'pb=!4v1694353007893!6m8!1m7!1sCAoSLEFGMVFpcE9iUDVzdmlOSnZ1WjhPQ29SQ2lYVHRJd2ZBOGl6QzhCWFFxUDl1!2m2!1d41.9009325!2d12.4833132!3f1.502901934577892!4f6.200202576290295!5f1.788286995916537'
	};

	const mapUrl = `https://www.google.com/maps/embed?${coordinates.treviFountain}`;
</script>

<template>
	<main>
		<div class="screen">
			<iframe
				class="map"
				:src="mapUrl"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>

			<Transition @after-leave="tossedCoin">
				<img
					v-if="!isCoinTossed"
					src="/matic.png"
					class="coin"
				>
			</Transition>
		</div>

		<div class="ui">
			<button
				class="toss"
				@click="tossCoin"
			>&gt;&gt; Toss coin &lt;&lt;</button>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			isCoinTossed: false
		};
	},
	methods: {
		tossCoin() {
			this.isCoinTossed = true;
		},
		tossedCoin() {
			this.isCoinTossed = false;
		}
	}
};
</script>

<style lang="scss" scoped>
main {
	$ui-top: 70%;

	display: flex;
	justify-content: center;
	.screen {
		width: 100vw;
		height: 100vh;
		position: relative;
		.map {
			width: 100%;
			height: 100%;
		}

		.coin {
			position: absolute;
			top: $ui-top;
			left: 50%;
			transform: translate3d(-50%, 0, 0);
			width: 5vw;
			height: 5vw;
			opacity: 0;

			&.v-enter-active, &.v-leave-active {
				transition: top 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
			}
			&.v-enter, &.v-leave-to {
				top: 45%;
				opacity: 1;
			}
		}
	}

	.ui {
		position: absolute;
		left: 50%;
		top: $ui-top;
		transform: translateX(-50%);
		button.toss  {
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
