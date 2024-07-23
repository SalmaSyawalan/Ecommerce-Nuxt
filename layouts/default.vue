<template>
    <div>
        <div>
            <header class="shadow-sm bg-white">
                <nav class="container mx-auto p-4 flex justify-between">
                    <NuxtLink to="/" class="font-bold text-xl">Nuxt Dojo</NuxtLink>
                    <ul class="flex gap-4">
                        <li><NuxtLink to="/">home</NuxtLink></li>
                        <li><NuxtLink to="/about">about</NuxtLink></li>
                        <li><NuxtLink to="/products" class="btn">products</NuxtLink></li>
                    </ul>
                </nav>
            </header>
        </div>

        <!-- output the page content -->
        <div class="container p-4 mx-auto">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>