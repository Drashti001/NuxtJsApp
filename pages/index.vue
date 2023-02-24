<template>

  
  <v-data-table 
    :headers="headers" 
    :items="todo.todo" 
    class="elevation-1">
    <template v-slot:[`item.taskname`]="{ item }">
      <span v-bind:class="item.cstatus ? 'isclicked' : '' ">{{ item.taskname }}</span> 
    </template>
    <template v-slot:[`item.cstatus`]="{ item }">
      <v-simple-checkbox
        v-model="item.cstatus"
        @click="Chkcstatus(item)"
        :single-select="singleSelect"
        
      ></v-simple-checkbox>
    </template>
      <template v-slot:top>
          <div class="d-flex justify-center ma-4">
              <v-col sm="12">
                  <v-alert  
                    dense 
                    type="primary" 
                    v-model="alert" 
                    elevation="16" 
                    style="opacity: 0.8" 
                    border="top" 
                    transition="scale-transition" 
                    max-height="150" 
                    icon="new_releases"
                    dismissible>
                      {{ message }}
                  </v-alert>
              </v-col>
          </div>
          <v-toolbar flat>
              <v-toolbar-title>TO DO LIST APPLICATION </v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ attrs }">
                    <!-- using nuxt-link for redirect page to add task page -->
                      <nuxt-link to="/AddTask">
                          <v-btn color="primary" dark class="mb-2" v-bind="attrs">ADD NEW TASK</v-btn>
                      </nuxt-link>

                  </template>
                  <!-- Modal Form for Edit Task -->
                  <v-card>
                      <v-card-title style="text-align:center">
                          <span class="text-h5" >EDIT TASK</span>
                      </v-card-title>
                      <v-card-text>
                          <v-container>
                              <v-row>
                                  <v-col cols="12" sm="6" md="12">
                                      <v-text-field 
                                        label="TASK NAME"
                                        v-model="editedTask.taskname"
                                      >
                                      </v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="12">
                                        <v-select
                                        label="PRIORITY"
                                        :items="priorities"
                                        v-model="editedTask.priority"
                                      >
                                      </v-select>
                                     
                                     
                                    </v-col>
                              </v-row>
                          </v-container>
                      </v-card-text>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="closeEdit"> Cancel </v-btn>
                          <v-btn color="blue darken-1" text @click="saveEdit"> Save </v-btn>
                      </v-card-actions>
                  </v-card>
                  <!-- Model Form Edit Close -->
              </v-dialog>
              <!-- Modal for Delete confirmation -->
              <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                      <v-card-title class="text--grey">Are you sure you want to delete this Category!!! </v-card-title>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="deleteTaskConfirm(item)">OK</v-btn>
                          
                          <v-spacer></v-spacer>
                      </v-card-actions>
                  </v-card>
              </v-dialog>
              <!-- Delete Model Close -->
          </v-toolbar>
      </template>
      <!-- Changing cstatus using v-switch -->
      <!-- <template v-slot:[`item.cstatus`]="{ item }">
          <v-switch v-model="item.cstatus" flat color="primary" :label="`${item.cstatus ? 'Active' : 'Deactive'}`" @change="changecstatus(item)"></v-switch>
      </template> -->

      <!-- Edit and Delete Action with Icons -->
      <template v-slot:[`item.actions`]="{ item }">
          <v-btn small class="mr-2" @click="editTask(item)">
              EDIT
          </v-btn>
          <v-btn small @click="deleteTask(item)">
              DELETE
          </v-btn>
      </template>

  </v-data-table>

  
</template>

<script>
//import AddTask from '../components/AddTask.vue';
import axios from "axios";
export default {
  components: {
      //AddTask
  },
  data: () => ({
      todo: [],
      taskname:"",
      item:'',
      priority:null,
      singleSelect: false,
      isclicked:false,
      //todoCheckbox: this.todo.cstatus === 1 ? false : true,
      alert: false,
      dialog: false,
      dialogDelete: false,
      priorities:["Low","Medium","High"],
      
      headers: [{
              text: "ID",
              value: "id"
          },
          {
              text:"cstatus",
              value:"cstatus"
          },
          {
              text: "TASK NAME",
              align: "start",
              sortable: true,
              value: "taskname",
          },
          
          {
              text: "PRIORITY",
              value: "priority"
          },
          
          {
              text: "ACTIONS",
              value: "actions",
              sortable: false
          },
      ],
      priorityColor: {
      "very-high": "#ed4c5c",
      high: "#ffce31",
      normal: "#00a790",
      low: "#43c4e3",
      "very-low": "#b01aff",
    },
      editedIndex: -1,
      editedTask: {
          taskname: "",
          priority: ""
      },
      message:""
      
  }),
  mounted() {
    //alert('created called');
    this.$store.dispatch('getData');
    console.log(this.$store.state, 'todo called');
      this.todo = this.$store.state.todos;
  },
  watch: {
      dialog(val) {
          val || this.closeEdit();
      },
      dialogDelete(val) {
          val || this.closeDelete();
      },
    },
  methods: {

      editTask(item) {
          this.editedIndex = this.todo.todo.indexOf(item);
          this.editedTask = Object.assign({}, item);
          this.dialog = true;
      },
      
      deleteTask(item) {
          //alert('delete task called');
          this.editedIndex = this.todo.todo.indexOf(item);
          //console.log(this.editedIndex, 'delete called');
          this.editedTask = Object.assign({}, item);
          //console.log(this.editedTask, 'get specific index data');
          this.dialogDelete = true;
      },
      deleteTaskConfirm(item) {
          //alert('delete confirmation called');
          Object.assign(this.todo.todo[this.editedIndex], this.editedTask);
          this.$store.dispatch("deleteTask", this.editedTask.id);
          //console.log(this.editedTask.id, 'id getting')
          this.editedTask = Object.assign({}, item);

          this.closeDelete();
      },
      closeDelete() {

          this.dialogDelete = false;
          this.$nextTick(() => {
              this.editedTask = Object.assign({}, this.defaultItem);
              this.editedIndex = -1;
          });
      },
      //close edit model
      closeEdit(){
        // alert('close Delete Called');
        this.dialog=false;
        this.$nextTick(()=>{
            this.editedTask = Object.assign({},this.defaultItem);
            this.editedIndex = -1;
        });
      },
      Chkcstatus: function(item){
        //alert('hbfsbdsb');
          console.log(item.taskname);
          if (item.cstatus == true) {
              //alert('if');
                let result = this.$axios.$put("http://localhost:4000/todo/" + item.id, {
                    taskname : item.taskname,
                    priority : item.priority,
                    cstatus: true,
                    id: item.id,

                }).then(function () {

                    console.log(result.data,'item found');
                });

            } else {
              //alert('else');
                this.$axios.$put("http://localhost:4000/todo/" + item.id, {
                    taskname: item.taskname,
                    priority: item.priority,
                    cstatus: false,
                    id: item.id,
                }).then(function () {});

            }
          },

      
      saveEdit(){
        //alert('saveEdit called');
        if(this.editedIndex > -1 )
        {
          //alert('if true');
          Object.assign(this.todo.todo[this.editedIndex], this.editedTask);
          this.$store.dispatch("updateTask",this.editedTask).then(() =>{
            
            this.message = "Updated Succesfully";
            this.alert =true;
            setTimeout(() => {
              this.alert =false;
            },3000);
          });
        }
          else{
            console.log(this.editedIndex,"Data is Not Available plss insert valid information");
          }
          this.closeEdit();
        }
      },
      


  }

</script>

<style scoped>
.isclicked {
  text-decoration: line-through;
}
</style>
