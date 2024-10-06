<script setup>

import SearchBar from './SearchBar.vue'

</script>

<template>
	<section> 
		<h1>Your Ultimate C++ Reference Guide</h1> 
		<p>Find answers to your C++ questions instantly. Search through a comprehensive and growing database of documentation, examples, and tutorials.</p>
		<SearchBar placeholder="Search for C++ classes, templates, functions, examples..." />
	</section>

	<section>
		<h2>Why Choose {{site_name}}?</h2>
		<ul>
			<li>
				<h3>Comprehensive Coverage</h3>
				<p>We're constantly expanding our database to include the entire C++ standard library, popular frameworks, and community resources.</p>
			</li>
			<li>
				<h3>Lightning-Fast Search</h3>
				<p>Our intelligent search algorithm delivers instant results, so you can spend less time searching and more time coding.</p>
			</li>
			<li>
				<h3>Code Examples and Tutorials</h3>
				<p>Find practical examples and in-depth tutorials to help you understand and apply C++ concepts effectively.</p>
			</li>
			<li>
				<h3>Always Up-to-Date</h3>
				<p>We keep our database current with the latest C++ standards and best practices, so you can be confident in the information you find.</p>
			</li>
		</ul>
	</section>

	<section>
		<h2>Built by Developers, for Developers</h2>
		<p>{{site_name}} is an open-source project created by a passionate developer. We believe in making C++ resources accessible to everyone, and we're constantly working to improve the platform.</p>
		<p>Want to contribute? Visit the <a :href="site_github.url" target="_blank">GitHub repository</a> to learn more.</p> 
	</section>
</template>