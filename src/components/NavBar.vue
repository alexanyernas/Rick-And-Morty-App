<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/favicon.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
                Rick and Morty
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0 mr-lg-0">
                    <li v-for="link in links" :key="link.title" class="nav-item">
                        <a :href="link.url" class="nav-link"><i :class="link.icon"></i>{{link.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            links: [
                {
                    title: 'GitHub',
                    icon: 'bi bi-github',
                    url: 'https://github.com/alexanyernas/'
                },
                {
                    title: 'Instagram',
                    icon: 'bi bi-instagram',
                    url: 'https://instagram.com/alexanyernas/'
                },
                {
                    title: 'Twitter',
                    icon: 'bi bi-twitter',
                    url: 'https://twitter.com/alexanyernas/'
                }
            ]
        }
    }
}
</script>

<style scoped>
li i
{
    margin-right: 8px;
}
</style>