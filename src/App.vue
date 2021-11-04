<template>
  <NavBar />
  <main class="container mt-4">
    <router-view />
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '../src/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['getCharacters'])
  },
  created () {
    this.getCharacters()
  }
}
</script>

<style>
*
{
  font-family: 'Poppins', sans-serif;
}
</style>