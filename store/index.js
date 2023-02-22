
import Vuex from 'vuex'
import todos from '../store/modules/todos.js'



const createStore = () => {
  return new Vuex.Store({
    modules: {
      todos
    }
  })
}
export default createStore