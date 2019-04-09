<template>
    <v-container fluid>
        <p>Hi Tarini {{URL}}</p>
    </v-container>   
</template>

<script>
export default {
    data() {
        return {
            URL: process.env.VUE_APP_URL
        }
    }
}
</script>

<style>

</style>
