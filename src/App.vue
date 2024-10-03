<script setup>

import { ref, onMounted } from 'vue'

const site_name = ref("CPPoogle")
const site_color = ref("#044F88")

onMounted(() => {
	document.title = site_name.value
})

</script>

<template>
	<header>
		<ul>
			<li><span @click="">{{site_name}}</span></li>
			<li><span @click="">Search</span></li>
			<li><span @click="">Link 3</span></li>
			<li><span @click="">Link 4</span></li>
			<li><span @click="">Link 5</span></li>
			<li><span @click="">Link 6</span></li>
		</ul>
	</header>

	<div class="container">
		
	</div>
</template>

<style scoped>

header {
	background-color: v-bind(site_color);
	position: fixed;
	top: 0;
	left: 0;
	height: var(--header-height);
	width: 100%;
	font-size: 1.125rem;
	color: #f3f3f3;
}

header > ul {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	width: 100%;
	height: 100%;
	grid-template-rows: 100%;
}

header > ul > li {
	display: flex;
	justify-content: center;
	align-items: center;
}

header > ul > li > span {
	cursor: pointer;
}

</style>
