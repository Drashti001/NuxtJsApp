<template>
<v-app dark>
    <NavBar />
    <v-main>
      <nuxt />
    </v-main>

    <v-footer :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar
    },
    data() {
        return {
            fixed: false
        }
    }

}
</script>
