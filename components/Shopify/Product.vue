<template>
  <div class="product">
    <div class="columns">
      

     <div class="column is-two-fifths media-col">
        <img :key="selectedImage"
             :src="product.images.edges[0].node.originalSrc"
             class="selected-image mb-4" />
      
        <div class="image-gallery">
          <img
            v-for="image in product.images.edges"
            :key="image.node.id"
            :src="image.node.transformedSrc"
          />
        </div>
     </div>
     <div class="column info-col">
       <h2 class="is-size-2 mb-2">{{ product.title }}</h2>
     </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>