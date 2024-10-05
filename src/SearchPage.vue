<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const query = computed(() => {
    return useRoute().query.q
})

</script>

<template>
    
</template>