<template>
    <div v-if="!characters" class="d-flex justify-content-center mt-5">
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="mt-4 row row-cols-1 row-cols-md-3 g-4 mb-4">
        <Card 
            v-for="character in characters"
            :key="character.id"
            :data="character"
        />
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'CardGrid',
    components: {
        Card
    },
    props: {
        characters: Array
    }
}
</script>