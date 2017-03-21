import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    backet: [],
    products: [
      {id: 1, name: 'Water', price: 50, buy: false},
      {id: 2, name: 'Bread', price: 70, buy: false},
      {id: 3, name: 'Cheese', price: 50, buy: false},
      {id: 4, name: 'Corn', price: 100, buy: false}
    ]
  },
  getters: {
    products(state) {
      return state.products.filter((product) => {
        return !product.buy;
      });
    },
    total(state) {
      return state.backet.reduce((sum, current) => {
        return sum + current.price;
      }, 0);
    },
    backet(state) {
      return state.backet;
    }
  },
  mutations: {
    buyProduct(state, productId){

      const product = state.products.find(product => {
        return product.id === productId;
      });

      product.buy = true;

      const buy = {
        productId: productId,
        name: product.name,
        price: product.price
      };
      state.backet.push(buy);
    },
    deleteProduct(state, productId){
      const product = state.products.find(product => {
        return product.id === productId;
      });

      product.buy = false;
      const backet = state.backet.find(backet => {
        return backet.productId === productId;
      });
      state.backet.splice(state.backet.indexOf(backet), 1);
    }
  }
});
