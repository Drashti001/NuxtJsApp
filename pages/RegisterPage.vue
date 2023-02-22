<template>
<v-app>
    <v-main>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>
                                Please Register...
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field v-model="firstname" :counter="10" :rules="fnameRules" label="First Name" required></v-text-field>

                                <v-text-field v-model="lastname" :rules="lnameRules" label="Last Name" required></v-text-field>

                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                                <v-text-field v-model="password" :rules="pwdRules" label="Password" required></v-text-field>

                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                           
                          
                            <v-spacer></v-spacer>
                            
                               
                            <v-btn color="primary" class="mx-2">Register</v-btn>
                            <nuxt-link to="/LoginPage" >  
              
                                <v-btn class="mx-2" color="primary">Login</v-btn>
                              
                            </nuxt-link>
                             
                                    
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-main>
</v-app>

</template>

  
  
<script>
export default {
    data: () => ({
        valid: true,
        firstname: '',
        lastname: '',
        password:'',
        fnameRules: [
            v => !!v || 'FirstName is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        lnameRules: [
            v => !!v || 'LastName is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        pwdRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters',
        ],
        
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>
