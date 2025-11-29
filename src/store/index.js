import { createStore } from 'vuex'
import state from './state'
import * as mutationFunctions from './mutations'
import * as actionFunctions from './actions'

const store = createStore({
    state,
    mutations: mutationFunctions,
    actions: actionFunctions
})

export default store
