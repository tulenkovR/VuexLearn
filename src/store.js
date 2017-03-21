import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		backet: [],
		products: [
			{id: 1, name: 'Water', price:50 ,buy: false},
			{id: 2, name: 'Bread', price:70 ,buy: false},
			{id: 3, name: 'Cheese',price:50 ,buy: false},
			{id: 4, name: 'Corn',  price:100 ,buy: false}
		]
	}
});
