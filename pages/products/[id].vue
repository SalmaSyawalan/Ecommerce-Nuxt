<template>
    <div>
        <!-- override header content yang ada di nuxt.config.ts -->
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <ProductDetail :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    const { data: product } = await useFetch(uri)

    if(!product.value){
        throw createError({statusCode: 404, message:'Product not found', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>