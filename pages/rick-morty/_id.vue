<template>
  <div
    v-if="!$apollo.queries.character.loading"
    class="rounded border bg-gray-900 ml-2 flex p-2"
  >
    <img :src="character.image" :alt="character.name" class="p-2 rounded" />
    <div class="p-2">
      <span class="text-white">{{ character.status }}</span>
      <h1 class="text-white text-2xl font-semibold">{{ character.name }}</h1>
      <h1 class="text-white">{{ character.gender }}</h1>
      <h1 class="text-white">{{ character.origin.name }}</h1>
    </div>
  </div>
</template>

<script>
//import gql from 'graphql-tag'
import GetCharacter from '@/graphql/RickMorty/GetCharacter.gql';

export default {
  name: 'CharacterCard',
  apollo: {
      $client: 'rickMorty',
      character: {
        query: GetCharacter,
        variables() {
            return {
                // if the route.params.id is null make id = 1
                id: this.$route.params.id || 1,
            }
        }
      },
    },
}
</script>