import './assets/main.css'

import { ref, createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomePage from './HomePage.vue'
import SearchPage from './SearchPage.vue'
import AboutPage from './AboutPage.vue'

const routes = [
	{ path: '/', component: HomePage, name: 'Home' },
	{ path: '/search', component: SearchPage, name: 'Search' },
	{ path: '/about', component: AboutPage, name: 'About' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

let app = createApp(App)

app.config.globalProperties.site_name = "CPPoogle"
app.config.globalProperties.site_color = "#044f88"
app.config.globalProperties.site_main_project = "Langoogle"
app.config.globalProperties.site_github = {
	author: app.config.globalProperties.site_main_project + "-References",
	name: app.config.globalProperties.site_name,
	url: "https://github.com/",
}
app.config.globalProperties.site_github.full_name = app.config.globalProperties.site_github.author + "/" + app.config.globalProperties.site_github.name
app.config.globalProperties.site_github.url = "https://github.com/" + app.config.globalProperties.site_github.full_name

app.use(router).mount('#app')
