<template>
	<div id="app">
		<app-products @buyProduct="buyProduct" :products="freeProducts"></app-products>
		<app-backet-orders @cancelBuy="cancelBuy" :backet="backet"></app-backet-orders>
	</div>
</template>

<script>

import BacketOrders from './components/backet-orders.vue';
import Products from './components/products.vue';

export default {
		data() {
				return {
						backet: [],
						products: [
								{id: 1, name: 'Water', price:50 ,buy: false},
								{id: 2, name: 'Bread', price:70 ,buy: false},
								{id: 3, name: 'Cheese',price:50 ,buy: false},
								{id: 4, name: 'Corn',  price:100 ,buy: false}
									 ]
				}
		},
		computed: {
				freeProducts() {
					return this.products.filter((product) => {
						return !product.buy;
						});
				}
		},
		methods: {
				buyProduct(product) {
					this.backet.push({productId: product.id, name: product.name, price: product.price})
				 },
				cancelBuy(prod) {
					const product_find = this.products.find(product => {
							return product.id === prod.productId;
					});

					product_find.buy = false;

					this.backet = this.backet.filter(product => product.productId !== prod.productId);
				}
		},
		components: {
				appBacketOrders: BacketOrders,
				appProducts: Products
		}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
