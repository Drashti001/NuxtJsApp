

export const namespaced =true

export const state = {
    todo :[],
    //user :[],
    //currentUser:{firstname:'drashti'}
    //todo: null
}
export const mutations ={
    //view all task of todo
    SET_TASK(state,todo){
        state.todo = todo
    },
  
    //delete task data
    DELETE_TASK(state, id){
       let index = state.todo.filter(task => task.id != id)
       state.todo = index;

    },
    //add task data 
    ADD_TASK :(state,tasks) => state.todo.unshift(tasks),
    UPDATE_TASK :(state,tasks) => (state.todo == state.tasks.map((task) =>{
      if(task.id === tasks.id)   {
        return Object.assign({}, task, tasks.data);
      }
    })),
    

}
export const getters={
    
}
export const actions = {

    async getData({commit}){
         const data = await this.$axios.$get('http://localhost:4000/todo')
        console.log('data getting',data);
         commit('SET_TASK', data)
        },

  
     async deleteTask({commit},id){
         await this.$axios.$delete(`http://localhost:4000/todo/${id}`);
         commit("DELETE_TASK",id);
        // if(response.cstatus == 200 || response.cstatus == 204){
        //   commit("DELETE_TASK",id);
        // }
      } ,
    async addTask({commit},tasks){
        const response = await this.$axios.$post("http://localhost:4000/todo",
        tasks
        );

       // console.log(tasks,'addTask called');
        commit("ADD_TASK",response.data);
     },
    async updateTask({commit},tasks){
        let response = await this.$axios.$put(`http://localhost:4000/todo/${id}`,
        tasks);
        commit("UPDATE_TASK",response.data);
     },
    }

    
    


export default{
    state,
    getters,
    mutations,
    actions
}