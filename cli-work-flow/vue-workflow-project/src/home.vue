<template>
    <div>
        <app-server-status v-for="(server, index) in 5" :key="index"></app-server-status>
    </div>
 </template>

<script>
import ServerStatus from './serverStatus.vue'
export default {
    components: {
        'app-server-status': ServerStatus
    }
}
</script>


