<template>
  <div class="cart box">
      <h3 class="is-size-3 mb-2">Cart</h3>
      <div v-if="cart">
          <div v-for="cartLine in cart.lines.edges" :key="cartLine.node.id"
               class="mb-4">
               <div class="columns">
                    <div class="column is-4 product-image-col">
                        <img :src="cartLine.node.merchandise.image.transformedSrc"
                            :alt="cartLine.node.merchandise.image.altText" />
                    </div>
                    <div class="column  product-info-col">
                        <h4 class="is-size-6 has-text-weight-bold">{{cartLine.node.merchandise.product.title}}</h4>
                        <h5 class="is-size-7">{{cartLine.node.merchandise.title}}</h5>
                    </div>
                    <div class="column is-4 product-price-col">
                        <h4 class="is-size-5 has-text-weight-bold">${{cartLine.node.merchandise.priceV2.amount}}</h4>
                    </div>
               </div>
               <div v-show="false">
                <h4>Cart Line: {{cartLine.node.merchandise}}</h4>
                <h4>Cart Line Attributes: {{cartLine.node.attributes}}</h4>
               </div>
          </div>
          <div class="total mb-5">
              <h4 class="is-size-4 has-text-weight-bold">Total: ${{cart.estimatedCost.totalAmount.amount}}</h4>
          </div>
          <a :href="cart.checkoutUrl" target="_blank"
             class="button is-primary mb-4">Checkout</a>
          <code v-show="false" class="debug">[{{cart}}]</code>
      </div>
      <div else>
          <p>Your cart is empty</p>
      </div>
      
  </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart.cart;
        }
    },
    created() {
    },
    methods: {},
    
}
</script>

<style>
    .cart {
        position: fixed;
        width: 400px;
        right: 0;
        top: 100px;
        
        background-color: white;
        z-index: 1000;
        border: 1px solid #EED;
    }
</style>