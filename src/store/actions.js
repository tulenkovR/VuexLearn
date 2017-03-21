export default {
    buy(context, id) {
      context.commit('buyProduct', id);
    },
    delete(context, productId){
      context.commit('deleteProduct', productId);
    }
}
