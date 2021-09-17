<template>
  <div class="product">
    <div class="columns">
      

     <div class="column is-two-fifths media-col">
       
        <img :key="selectedImage"
             :src="selectedImage.originalSrc"
             class="selected-image mb-4" />

        <div class="image-gallery">
          <img
            v-for="image in product.images.edges"
            :key="image.node.id"
            :src="image.node.transformedSrc"
            @click="selectedImage = image.node"
          />
        </div>
     </div>
     <div class="column info-col">
      <h2 class="is-size-2 mb-2">{{ product.title }}</h2>
      <p class="description mb-2">
            {{product.description}}
      </p>
      <div class="options">
        <div v-for="option in product.options" :key="option.id" class="field">
          <label class="label">{{ option.name }}</label>
           <div class="control">
            <div class="select">
              <option v-for="value in option.values" :key="`${option.name}-${value}`">
                {{value}}
              </option>
            </div>
           </div>
        </div>
      </div>

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
  data() {
    return {
      selectedImage: null,
      selectedVariant: null,
    };
  },
  computed: {
    numVariants() {
      return this.products.variants.edges.length;
    }
  },
  watch: {
    product(val) {
      console.log('product watch ', val);
    } 
  },
  created() {
    this.selectedImage = this.product.images.edges[0].node;
    this.selectedVariant = this.product.variants.edges[0].node;
    console.log(this.product.images);
    console.log(this.selectedImage);
  },
  
}
</script>