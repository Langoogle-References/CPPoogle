<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const query = ref("")
const props = defineProps(['placeholder'])
const router = useRouter()

const submit = (e) => {
	if ((e.type == "click" || e.key == "Enter") && query.value.trim() != '') {
		router.push({ path: '/search', query: { q: query.value } })
		e.target.blur()
	}
}

</script>

<template>
	<input type="text" :placeholder="props.placeholder ?? 'Search...'" v-model="query" @keydown="submit">
	<span class="button" @click="submit">Search</span>
</template>

<style scoped>

input, .button {
	background: #f3f3f3;
	padding: 0.75em;
	padding-left: 1em;
	font-size: 0.75rem;
	color: #111;
	border: 1px solid #cdcdcd;
	font-family: sans-serif;
}

input:hover, .button:hover,
input:focus, .button:focus {
	outline: none;
	background: #e6e6e6;
}

input {
	border-radius: 999px 0 0 999px; /* 999px -> force to 50% of the height */
	padding-left: 1em;
}

input::placeholder {
	color: #888888;
}

.button {
	border-radius: 0 999px 999px 0; /* 999px -> force to 50% of the height */
	padding-right: 1em;
	border-left: none;
	text-decoration: none;
	cursor: pointer;
}

</style>