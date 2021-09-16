
<template>
  <div class="container">
    
      <h1 class="p-2 text-4xl font-semi-bold text-gray-800">
        Nuxt.js Querying a GraphQL API
      </h1>
      <div class="flex p-2" v-if="!$apollo.queries.characters.loading">
        <ul class="w-100 px-2 rounded border text-gray-600">
          <li
            v-for="character in characters.results"
            :key="character.id"
            class="py-2"
          >
            <nuxt-link
              :to="'/rick-morty/' + character.id"
              class="w-full inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
            >
              {{ character.name }}:
            </nuxt-link>
          </li>
        </ul>
        <div class="flex-grow min-h-full">
          <NuxtChild :key="$route.params.id"></NuxtChild>
        </div>
      </div>
  </div>
</template>


<script>

import AllCharacters from '@/graphql/RickMorty/AllCharacters.gql';

export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
    }
  },
  apollo: {
    $client: 'rickMorty',
    characters: {
      query: AllCharacters,
      loadingKey: 'loading',
    },
  },
  created() {
  },
  methods: {
  },
}
</script>
