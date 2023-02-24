<template>
    <nav>

        <v-toolbar>
            <nuxt-link to="/">
                <v-toolbar-title class="primary--text text-uppercase font-weight-black">
                    Todo<span class="white--text font-weight-light">Application</span>
                </v-toolbar-title>
    
            </nuxt-link>
            <v-spacer></v-spacer>
            <div v-if="$auth.loggedIn">
                {{ $auth.user.email }}
                <v-spacer></v-spacer>
            <nuxt-link to="/LoginPage" class="mx-2">  
                
                <v-btn>Logout</v-btn>
            </nuxt-link>
            </div>
           
            <div v-else>
             
               
                  
                    <v-btn>Login</v-btn>
                  
              
               
                    <v-btn>Register</v-btn>
               
            
              
            </div>
            
            
         
            
        </v-toolbar>
      
    
    </nav>
</template>
<script>
  export default {
    data: () => ({
    
    }),
    methods:{
        
    }
  }
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
    color: inherit;
}
</style>