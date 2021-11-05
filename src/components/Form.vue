<template>
    <div class="d-flex justify-content-center">
        <form 
            @submit.prevent="handleSubmit" 
            class="row align-self-center"
        >
            <div>
                <input 
                    type="text" 
                    v-model.trim="query"
                    class="form-control" 
                    placeholder="Type a name..."
                    required 
                />
            </div>
            <div class="text-center mt-2">
                <button 
                    type="submit" 
                    class="btn btn-primary mb-3 w-100"
                >
                    Search <i class="bi bi-search"></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Form',
    data () {
        return {
            query: ''
        }
    },
    methods: {
        ...mapActions( ['getCharacters', 'resetCharacters'] ),
        handleSubmit () {
            this.resetCharacters()
            this.getCharacters( this.query )
            this.query = ''
        }
    }

}
</script>

<style scoped>
form
{
    width: 75%;
}

@media only screen and ( max-width: 600px ) 
{
    form
    {
        width: 100%;
    }
}
</style>