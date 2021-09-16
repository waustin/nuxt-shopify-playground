<template>
  <div>
    <b-navbar class="is-dark">
      <template #brand>
          <NuxtLink class="navbar-item" to="/">
            Home
          </NuxtLink>
      </template>
      <template #start>
        <NuxtLink to="/rick-morty" class="navbar-item">
                Rick Morty API
            </NuxtLink>
            <NuxtLink to="/shopify/products" class="navbar-item">
                Shopify Products
            </NuxtLink>
      </template>
    </b-navbar>
        
       

    <section class="section">
      <Nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
