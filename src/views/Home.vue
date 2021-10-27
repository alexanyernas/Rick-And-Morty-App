<template>
  <div class="text-center">
    <h1>Search Characters</h1>
  </div>
  <Form />
</template>

<script>
import { mapState } from 'vuex'
import Form from '../components/Form.vue'

export default {
    name: 'Home',
    computed: {
      ...mapState(['characters'])
    },
    components: {
      Form
    }
}
</script>