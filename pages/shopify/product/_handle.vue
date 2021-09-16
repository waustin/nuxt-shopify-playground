<template>
    <section class="product-detail-page">
        
        <NuxtLink to="/shopify/products" class="button is-dark mb-4">Back to All Products</NuxtLink>

        <div v-if="!$apollo.queries.product.loading">
            <ShopifyProduct :product="product" />    

            <code class="debug">
              <vue-json-pretty :data="product"  :deep="2" />
            </code>
        </div>
        <div v-else>
            Product Loading...
        </div>
    </section>    
</template>
<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

import GetProductByHandle from '@/graphql/Shopify/GetProductByHandle.gql';

export default {
    name: 'ProductDetailPage',
    components: {
      VueJsonPretty,
    },
    apollo: {
        $client: 'shopify',
        product: {
            query: GetProductByHandle,
            variables() {
                return {
                    handle: this.$route.params.handle,
                }
            },
            update: data => data.productByHandle,
            prefetch: true,
        }
    },
}
</script>
<style scoped>
    .debug {
        display: block;
        font-family: monospace;
        padding: 2rem;
        background-color: #DDD;
        margin: 4rem;
    }
</style>