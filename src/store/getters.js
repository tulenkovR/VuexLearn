export default {
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
}
