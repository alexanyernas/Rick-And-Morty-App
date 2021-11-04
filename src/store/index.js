import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state: {
        characters: null
    },
    mutations: {
        setCharacters ( state, payload ) {
            setTimeout(() => {
                state.characters = payload
            }, 3000)
        },
        resetCharacters ( state, payload ) {
            state.characters = payload
        }
    },
    actions: {
        getCharacters ({ commit }, query='rick') {
            const url = `https://rickandmortyapi.com/api/character/?name=${ query }`
            axios.get( url )
                .then( ({ data }) => {
                    const { results } = data
                    commit( 'setCharacters', results )
                })
                .catch( console.log )
        },
        resetCharacters({commit}) {
            commit('resetCharacters', null)
        }
    }
})

export default store