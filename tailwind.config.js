/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

module.exports = {
    theme: {
        fontFamily: {
            sans: [
                'Pragmatica',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ]
        },
        colors: {
            white: '#fff',
            black: '#000',
            transparent: 'rgba(0,0,0,0)',
            blue: {
                100: '#E6F3FF',
                200: '#BFE1FF',
                300: '#99CFFF',
                400: '#4DAAFF',
                500: '#0086FF',
                600: '#0079E6',
                700: '#005099',
                800: '#003C73',
                900: '#00284D'
            },
            gray: {
                100: '#F2F2F2',
                200: '#DFDFDF',
                300: '#CCCCCC',
                400: '#A5A5A5',
                500: '#7F7F7F',
                600: '#727272',
                700: '#4C4C4C',
                800: '#393939',
                900: '#262626'
            }
        },
        container: {
            center: true,
            padding: '1rem'
        }
    },
    variants: {},
    plugins: []
}
