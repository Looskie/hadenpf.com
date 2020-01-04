export default {
    mode: 'spa',
    head: {
        titleTemplate: titleChunk => `${titleChunk ? `${titleChunk} | ` : ''}` + 'hadenfletcher',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://use.typekit.net/tom8sza.css' }
        ]
    },
    loading: {
        color: '#fff'
    },
    css: [
        '~assets/css/main.css'
    ],
    plugins: [

    ],
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss'
    ],
    modules: [

    ],
    build: {
        extend(config, ctx) {

        },
        postcss: {
            plugins: {
                'autoprefixer': {},
                'postcss-nested': {}
            }
        }
    }
}
