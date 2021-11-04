<template>
  <div class="text-center">
    <h1>Search a character</h1>
  </div>
  <Form />
  <CardGrid :characters="characters" />
</template>

<script>
import { mapState } from 'vuex'
import Form from '../components/Form.vue'
import CardGrid from '../components/CardGrid.vue'

export default {
    name: 'Home',
    computed: {
      ...mapState(['characters'])
    },
    components: {
      Form,
      CardGrid
    }
}
</script>