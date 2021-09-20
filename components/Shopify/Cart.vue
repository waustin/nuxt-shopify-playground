<template>
  <div class="cart">
      <h3 class="is-size-3 mb-2">Cart</h3>
      <p>Cart Items will go here</p>
      <p>[{{cart}}]</p>
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
        width: 300px;
        right: 10px;
        top: 10px;
        padding: 20px;
        background-color: white;
        z-index: 1000;
        border: 1px solid #EED;
    }
</style>