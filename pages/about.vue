<template>
    <div>
        <h2>about</h2>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
    
</script>

<style scoped>

</style>