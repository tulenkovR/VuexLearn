<template>
	<div id="app">
		<app-products></app-products>
		<app-backet-orders></app-backet-orders>
	</div>
</template>

<script>

import BacketOrders from './components/backet-orders.vue';
import Products from './components/products.vue';

export default {
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
