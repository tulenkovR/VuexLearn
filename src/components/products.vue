<template>
  <div id="products">
    <h3>Products</h3>
    <hr>
    <div class="row" v-for="product in products">
      <h4>{{ product.name }} price - {{ product.price }}</h4>
      <button @click="buyProduct(product)">Buy</button>
    </div>
  </div>
</template>

<script>
		export default {
				computed: {
					products() {
						return this.$store.getters.products;
					}
				},
				methods: {
						buyProduct(product) {
								this.$store.dispatch('buy', product.id);
						}
				}
		}

</script>

<style scoped>
		#products {
				box-shadow: 1px 1px 2px 1px #ccc;
				margin: 20px;
				padding: 20px;
				display: inline-block;
				width: 300px;
				vertical-align: top;
		}
		.row h4 {
				display: inline-block;
				width: 70%;
				text-align: left;
				margin: 0 0 10px 0;
		}
		button {
				background-color: lightgreen;
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
