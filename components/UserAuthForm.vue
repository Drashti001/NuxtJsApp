<template>
    <v-app>
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
                                   
    
                                    <v-text-field 
                                        v-model="email" 
                                        :rules="emailRules" 
                                        label="E-mail" 
                                        required></v-text-field>
    
                                    <v-text-field 
                                        v-model="password" 
                                        :type="showPassword ? 'text' :'password'"
                                        :rules="pwdRules"  
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        label="Password" 
                                        counter="true"
                                        @click:append="showPassword != showPassword"
                                        required></v-text-field>
    
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

export default {
    components: {
      
    },
    data: () => ({
        valid: true,
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

}
</script>
<style scoped>
</style>