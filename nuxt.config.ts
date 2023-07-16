// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/GitHubPagesSample/',
        head: {
            link: [
                {rel: 'icon', type: "image/x-icon", href: "/GitHubPagesSample/favicon.ico"}
            ]
        }
    },
    devtools: {enabled: true}
})
