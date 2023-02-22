<template>
<v-app>
    <!-- <div v-for="u in user" >
        {{ u.firstname }}
    </div> -->
    <v-main>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>
                                Login Form
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                               

                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                                <v-text-field 
                                    v-model="password" 
                                    type="password"
                                    :rules="pwdRules"  
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    label="Password" 
                                    @click:append="showPassword != showPassword"
                                    required></v-text-field>
                                    :type="showPassword ? 'text' :'password'"
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                           
                          
                            <v-spacer></v-spacer>
                                <nuxt-link  to="/RegisterPage">
                                    <v-btn color="primary" class="mx-2">Register</v-btn>
                                </nuxt-link>
                                    <v-btn color="primary" class="mx-2">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-main>
</v-app>
</template>
<script>
import {mapState} from 'vuex';
    export default {
        name:'LoginPage',
        computed:{
             ...mapState(['user'])
        },
        mounted(){
            alert('rereerer');
            console.log(this.$store.state,'fjnjdnfnfn');
            this.$store.dispatch("loadUser");
            
        },
      data: () => ({
        valid: true,
        users:[],
        showPassword:false,
        name: '',
        pwdRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password:''
       
      }),
      middleware:'test',
      methods: {
        // validate () {
        //   this.$refs.form.validate()
        // },
        // reset () {
        //   this.$refs.form.reset()
        // },
        // resetValidation () {
        //   this.$refs.form.resetValidation()
        // },
      },
    }
  </script>