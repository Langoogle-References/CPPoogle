<script setup>

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const query = computed(() => {
    return useRoute().query.q
})

onMounted(() => {
    document.title = `"${query.value}" - ` + document.title
})

</script>

<template>
    
</template>