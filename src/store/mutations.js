export default {
    buyProduct(state, id){

      const product = state.products.find(product => {
        return product.id === id;
      });

      product.buy = true;

      const buy = {
        productId: id,
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
