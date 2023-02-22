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
                 <!-- username -->
                 <!-- logout -->
            </div>
           
            <div v-else>
             
                <nuxt-link to="/LoginPage" class="mx-2">  
                  
                    <v-btn>Login</v-btn>
                  
                </nuxt-link>
                <nuxt-link to="/RegisterPage"  class="mx-2">  
              
                    <v-btn>Register</v-btn>
               
               </nuxt-link>
                <!-- login -->
                <!-- logout -->
            </div>
            
            
         
            
        </v-toolbar>
      
    
    </nav>
</template>
<script>
  export default {
    data: () => ({
      //   show:false,
      // type: 'month',
      // start: '2019-01-01',
      // end: '2019-01-06',
      // typeOptions: [
      //   { text: 'Day', value: 'day' },
      //   { text: '4 Day', value: '4day' },
      //   { text: 'Week', value: 'week' },
      //   { text: 'Month', value: 'month' },
      //   { text: 'Custom Daily', value: 'custom-daily' },
      //   { text: 'Custom Weekly', value: 'custom-weekly' }
     //]
    }),
    methods:{
        // showCalender(){
        //     this.show=true;
        // }
    }
  }
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
    color: inherit;
}
</style>