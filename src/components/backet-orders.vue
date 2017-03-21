<template>
		<div id="backet">
				<div class="summary">
						<h3>Backet</h3>
						<h5>Total summa buys: {{ total }}</h5>
				</div>
				<hr>
				<div class="row" v-for="prod in backet">
						<h4>{{ prod.name }}</h4>
						<button  @click="cancelBuy(prod)">Delete</button>
						<div class="price">{{ prod.price }}</div>
				</div>
		</div>
</template>

<script>
		export default {
				props: {
					backet: {
						type: Array,
						required: true
					}
				},
				methods: {
						cancelBuy(prod) {
								this.$emit('cancelBuy', prod);
						}
				},
				computed: {
						total() {
								return this.backet.reduce((sum, current) => {
									return sum + current.price;
								}, 0);
						}
				}
		}
</script>

<style>
		#backet {
				box-shadow: 1px 1px 2px 1px #ccc;
				margin: 20px;
				padding: 20px;
				display: inline-block;
				width: 300px;
				vertical-align: top;
				text-align: left;
		}
		.summary {
				text-align: center;
		}
		.row h4 {
				display: inline-block;
				width: 30%;
				margin: 0 0 10px 0;
				box-sizing: border-box;
		}
		.row span {
				width: 30%;
				color: red;
				cursor: pointer;
		}
		.row span:hover {
				color: darkred;
		}
		.price {
				display: inline-block;
				width: 38%;
				text-align: right;
				box-sizing: border-box;
		}
		button {
				background-color: #d35400;
				border: none;
				box-shadow: 1px 1px 1px black;
				font-size: inherit;
				text-align: right;
				cursor: pointer;
		}
		button:hover {
				background-color: green;
		}
</style>
