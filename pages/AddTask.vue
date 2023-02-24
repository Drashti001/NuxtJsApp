<template>
  <v-form ref="form" v-model="valid" lazy-validation>
      <div class="d-flex justify-center ma-4">
          <v-col sm="12">
              <v-alert dense type="primary" v-model="alert" elevation="16" style="opacity: 0.8" border="top" transition="scale-transition" max-height="150" dismissible>
                  Thanks For Adding Items !
              </v-alert>
          </v-col>
      </div>
  
      <v-toolbar>
          <v-toolbar-title>Add Task</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <nuxt-link to="/">
              Back to home
          </nuxt-link> --> 
  
        <nuxt-link to="/" style="float: right"
            ><v-btn color="primary" dark class="mb-2 mx-2">
             BACK TO HOMEPAGE <v-icon>mdi-arrow-right</v-icon>
            </v-btn></nuxt-link
          > 
      </v-toolbar>
      <!-- <v-text-field v-model="taskname">
  
      </v-text-field>
             -->
          <v-text-field
            v-model="taskname"
            :counter="10"
            :rules="nameRules"
            label="Enter Task"
            required
          ></v-text-field>
  
          <v-select
            v-model="priority"
            :items="priorities"
            label="Select Task Priorities"
            dense
            outlined
            required
            :rules="priorityRules"
          ></v-select>
  
    
          
      
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            name="checked"
            required
          ></v-checkbox> 
      
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          SUBMIT
      </v-btn>
  
    <v-btn color="error" class="mr-4" @click="reset">
          RESET FORM
      </v-btn>
  
   </v-form>
  </template>
  
      
  <script>
  export default {
      data() {
          return {
              alert: false,
              //cstatus:false,
              taskname: null,
              priority: "",
  
              checked: false,
              checkbox: '',
              valid: true,
              priorities: ['Low', 'Medium', 'High'],
  
              nameRules: [
                  v => !!v || 'Name is required',
                  v => (v && v.length > 3) || 'Name must be more than 3 characters',
              ],
  
              priorityRules: [
                  v => !!v || 'Priority is required'
              ]
          }
      },
  
      methods: {
          validate() {
              //alert('helooooo');
  
              let addtask = {
                  taskname: this.taskname,
                  priority: this.priority,
                  cstatus: false,
  
              };
              //check if name , description 
              if (this.taskname == "" || this.priority == "" || this.checkbox == "") {
                  //validate user 
                  this.$refs.form.validate();
              } else {
                  //alert('heloooooo');
                  this.$store.dispatch("addTask", addtask).then(() => {
                      console.log(addtask, 'data added');
                      this.alert = true;
                      setTimeout(() => {
                          this.alert = false;
                      }, 3000);
                      this.$refs.form.reset();
                  });
  
              }
          },
  
          reset() {
              this.$refs.form.reset();
          },
  
      }
  }
  </script>
    
    
  <style lang="scss" scoped>
    
</style>
  



<!-- <template>
  <v-form>
    
    <v-text-field
          v-model="taskname"
          :counter="10"
          
          label="Enter Task"
          required
        ></v-text-field>

        <v-select
        v-model="priority"
        :items="priorities"
        label="Select Task Priorities"
        dense
        outlined
        required
        
      ></v-select>

      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          name="checked"
          required
        ></v-checkbox> 
       
        
     
    
      

   <v-btn @click="add">submit</v-btn>
   <nuxt-link to="/">
    Back to home
 </nuxt-link> 
  </v-form>
</template>

<script>
  export default {
    data(){
      return{
        taskname:null,
        priority:null,
        checkbox:'',
        priorities: ['Low', 'Medium', 'High'],
      }
    },
    methods:{
      add(){
        alert('fdsfds');
        let adddata = {
                taskname: this.taskname,
                priority: this.priority,
                cstatus: false,

            };
            this.$store.dispatch("addTask", adddata);
            console.log(adddata,'data added');
            //this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style> -->