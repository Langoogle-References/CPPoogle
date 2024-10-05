<template>
    <div class="container">
        <h1>About</h1>
        <p>Welcome to <b>{{site_name}}</b>, your dedicated and centralized reference search engine for all things related to C++. As part of the broader <b>{{site_main_project}}</b> initiative, {{site_name}} aims to offer developers a fast, efficient, and reliable way to access C++ documentation, syntax examples, and best practices.</p>
    
        <h2>The Langoogle Project</h2>
        <p><b>{{site_main_project}}</b> is a project that strives to be the ultimate centralized resource for programming languages. As the software development landscape grows more complex with multiple languages and frameworks, it becomes increasingly challenging to find consistent, well-organized, and up-to-date references for each language. <b>{{site_main_project}}</b> addresses this need by providing an all-in-one platform where developers can find accurate and concise references for any programming language.</p>
        <p>Whether you're learning a new language or diving deeper into an advanced feature of your favorite one, <b>{{site_main_project}}</b> streamlines the experience by reducing the need to visit multiple fragmented resources. It brings together documentation, tutorials, and reference materials into a centralized hub, saving time and reducing the frustration of scattered and outdated resources.</p>
    
        <h2>{{site_name}}</h2>
        <p><b>{{site_name}}</b> is the C++-specific engine of {{site_main_project}}. It’s tailored for C++ programmers, from beginners to seasoned professionals, offering them a focused space to find everything they need about the language. With {{site_name}}, you can quickly search for syntax, standard libraries, functions, data structures, and more.</p>
        <p>The goal of <b>{{site_name}}</b> is not only to be a reference but also a tool to accelerate problem-solving and learning. The C++ ecosystem is vast and constantly evolving, and having a reliable source to consult makes development smoother and more efficient. With a clean, intuitive interface and robust search capabilities, {{site_name}} helps you access the information you need without distraction.</p>
    
        <h2>Open Source and Community</h2>
        <p>As an open-source project, <b>{{site_main_project}}</b> and {{site_name}} are community-driven and welcome contributions from developers around the world. Whether you're fixing a bug, adding a new feature, or improving documentation, your help is greatly appreciated.</p>
        <p>The codebase for <b>{{site_name}}</b> is hosted on GitHub under the repository <a :href="site_github.url" target="_blank">{{site_github.full_name}}</a> by <b>{{site_github.author}}</b>. You can find the entire project here, including the roadmap, contribution guidelines, and the latest updates. If you'd like to contribute, feel free to explore <b>{{site_github.name}}</b> and submit a pull request or open an issue.</p>
        <p>Together, we can continue building {{site_main_project}} and {{site_name}} into the most comprehensive resource for C++ and all programming languages!</p>
    </div>
</template>

<style scoped>

.container {
    width: 70%;
}

</style>