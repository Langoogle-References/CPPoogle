<script setup>

import { ref, useTemplateRef } from 'vue'

const query = ref("")
const button = useTemplateRef('button')
const props = defineProps(['placeholder'])

const submit = (e) => {
	if (e.key == "Enter") {
		button.value.click()
		e.target.blur()
	}
}

</script>

<template>
	<input type="text" :placeholder="props.placeholder ?? 'Search...'" v-model="query" @keydown="submit">
	<RouterLink ref="button" class="button" :to="'/search?q=' + encodeURIComponent(query)">Search</RouterLink>
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
}

.slot {
	display: none;
}

</style>