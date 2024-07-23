export default defineEventHandler(async(event) =>{
    // const param = getQuery(event)
    // const body = await readBody(event)
    // return {
    //     message: `hello ${param.name}, you are ${body.age} years old`
    // }
    const runtimeConfig = useRuntimeConfig()
    const currencyKey = runtimeConfig.CURRENCY_API_KEY
    const currency = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=EUR`)
    return currency
})