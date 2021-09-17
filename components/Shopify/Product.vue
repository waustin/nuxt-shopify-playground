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
      <div class="field is-grouped options mb-4">
        <div v-for="option in product.options" :key="option.id" class="control">
          <label class="label">{{ option.name }}</label>
          <div class="select">
            <select>
              <option v-for="value in option.values" :key="`${option.name}-${value}`">
                {{value}}
              </option>
            </select>
          </div>
        </div>
      </div>
      <h5 class="is-size-5 price mb-4">${{ selectedVariant.priceV2.amount }}</h5>
      <div class="debug">
        <h4 class="is-size-4">Selected Variant</h4>
        <vue-json-pretty :data="selectedVariant"  :deep="1" />
      </div>
     </div>

    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  name: 'Product',
  components: {
    VueJsonPretty,
  },
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