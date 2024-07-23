<template>
    <div>
        <div>
            <header class="shadow-sm bg-white">
                <nav class="container mx-auto p-4">
                    <NuxtLink to="/" class="font-bold text-xl">Nuxt Dojo</NuxtLink>
                </nav>
            </header>
        </div>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">home</NuxtLink></li>
                <li><NuxtLink to="/about">about</NuxtLink></li>
                <li><NuxtLink to="/products">products</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>