<script setup>

import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const query = computed(() => {
    return route ? route.query.q : ''
})

const title = document.title

document.title = `"${query.value}" - ${title}`

watch(query, (newQuery) => {
    document.title = `"${newQuery}" - ${title}`
})

</script>

<template>
    {{query}}
</template>