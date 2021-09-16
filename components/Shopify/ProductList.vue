<template>
    <div class="product-list">
        <ShopifyProductListItem
            v-for="product in products"
            :key="product.node.id"
            :product="product.node" />
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
    }
    .product-list-item {
       
    }
</style>