<template>
    <div class="product-list-item">
        <NuxtLink :to="'/shopify/product/' + product.handle">
            <div class="thumbnail">
                <img :src="product.images.edges[0].node.transformedSrc" />
            </div>
            <h4 class="text-lg">{{ product.title }}</h4>
        </NuxtLink>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .product-list-item {
        padding: 2rem;
        border: 1px solid #DDD;
        border-radius: 4px;
        max-width: 300px;
        margin: 1rem;
    }
    .thumbnail {
        background-color: #FFF;
        margin-bottom: 1rem;
    }
</style>