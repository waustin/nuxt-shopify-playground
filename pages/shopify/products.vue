<template>
    <div class="products">
        <h1 class="text-4xl mb-2">Shopify API Product Page</h1>
       
       <div v-if="$apollo.queries.shop.loading">Loading&hellip;</div>

        <div class="" v-if="!$apollo.queries.shop.loading">
            <h2 class="text-xl mb-1">Shop Name: [ {{shop.name}}]</h2>
            
            <h3 class="text-xl mb-2">Product List</h3>
            <ShopifyProductList
                :products="shop.products.edges" />
            <hr/>
            
       </div>

        <code class="debug">
            <vue-json-pretty :data="shop" :deep="2" />
        </code>
        
  
    </div>
</template>

<script>

import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

import AllProducts2 from '@/graphql/Shopify/AllProducts2.gql';

export default {
    name: 'ProductListPage',
    components: {
        VueJsonPretty,
    },
    apollo: {
        $client: 'shopify',
        shop: {
            query: AllProducts2,
            loadingKey: 'loading',
            /* 
            update (data) {
                this.hasMore = data.shop.collectionByHandle.products.pageInfo.hasNextPage
                return data.shop.collectionByHandle.products.edges
            }
            */
        }
    },
    data() {
        return {
            hasMore: false,
            shop: '',
        }
    },
    methods: {
    /*
      loadMore() {
        const cursor = this.products.slice(-1)[0].cursor
        this.$apollo.queries.products.fetchMore({
          variables: {
            after: cursor
          },
          updateQuery(previousResult, { fetchMoreResult }) {
            const newProducts = fetchMoreResult.shop.collectionByHandle.products.edges
            this.hasMore = fetchMoreResult.shop.collectionByHandle.products.pageInfo.hasNextPage
            return {
              shop: {
                __typename: 'Shop',
                collectionByHandle: {
                  __typename: 'Collection',
                  products: {
                    __typename: 'ProductConnection',
                    edges: [...previousResult.shop.collectionByHandle.products.edges, ...newProducts],
                    pageInfo: {
                      __typename: 'PageInfo',
                      hasNextPage: this.hasMore
                    }
                  }
                }
              }
            }
          }
        })
      }*/
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