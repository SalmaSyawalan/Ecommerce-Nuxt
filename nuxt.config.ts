import { defineNuxtConfig } from 'nuxt/config'
import { env } from 'process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Nuxt'}
      ],
      link:[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig:{
    CURRENCY_API_KEY: process.env.CURRENCY_API_KEY
  }
})
