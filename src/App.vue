<script setup>

import SearchBar from './SearchBar.vue'

import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const site_name = ref("CPPoogle")
const site_color = ref("#044f88")

const header_link_count = computed(() => {
	return document.querySelectorAll("header > ul > li").length
})

const route = useRoute()
const current_page_name = computed(() => {
	return route.name
})

onMounted(() => {
	document.title = `${current_page_name.value} | ${site_name.value}`
})

watch(current_page_name, (new_page_name) => {
	document.title = `${new_page_name} | ${site_name.value}`
})

</script>

<template>
	<header>
		<ul>
			<li><RouterLink to="/">{{site_name}}</RouterLink></li>
			<li><a :href="site_github.url" target="_blank">GitHub</a></li>
			<li><a :href="site_github.url + '/issues'" target="_blank">Issues</a></li>
			<li><a :href="'https://github.com/' + site_github.author" target="_blank">{{site_github.author}}</a></li>
			<li><RouterLink to="/about">About</RouterLink></li>
			<li><SearchBar /></li>
		</ul>
	</header>

	<main>
		<RouterView />
	</main>

	<footer>
		<p>
			Made by <b>{{site_main_project}}</b> | <a :href="site_github.url">{{site_github.full_name}}</a> | &copy; 2024-present<br>
			Powered by <a href="https://vuejs.org/">Vue.JS</a>, <a href="https://router.vuejs.org/">VueRouter</a> and {{site_name}}-Search-engine.<br>
			{{site_name}}-Search-engine data based on <a href="https://cppreference.com/">C++ Reference</a> and <a href="https://cplusplus.com/reference">cplusplus.com Reference</a>.
		</p>
	</footer>
</template>

<style>

header {
	background-color: v-bind(site_color);
}

header > ul {
	grid-template-columns: repeat(v-bind(header_link_count), 1fr);
}

button {
	background: v-bind(site_color);
}

button:hover {
	background: color-mix(in srgb, v-bind(site_color) 90% , black 10%);;
}

a {
	color: v-bind(site_color);
}

</style>