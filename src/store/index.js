import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state: {
        characters: []
    },
    mutations: {
        setCharacters ( state, payload ) {
            state.characters = payload
        },
        setCharactersFilter ( state, payload ) {
            state.characters = payload
        }
    },
    actions: {
        getCharacters ({ commit }) {
            const url = 'https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]'
            axios.get( url )
                .then( ({ data }) => commit( 'setCharacters', data ) )
                .catch( console.log )
        },
        getCharactersFilter ({ commit }, query ) {
            const url = `https://rickandmortyapi.com/api/character/?name=${ encodeURI(query) }`
            axios.get( url )
                .then( ({ results }) => commit( 'setCharactersFilter', results ) )
                .catch( console.log )
        }
    }
})

export default store