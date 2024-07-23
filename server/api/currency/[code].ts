export default defineEventHandler(async (event) => {
    const ctrCode = event?.context?.params?.code  //setelah params harus sama sm nama file
    // console.log(event)
    const runtimeConfig = useRuntimeConfig()
    const currencyKey = runtimeConfig.CURRENCY_API_KEY
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${ctrCode}`
    
    const data = await $fetch(uri)
    return data
})