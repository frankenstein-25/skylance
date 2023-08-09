/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#2b63c3',
                },
                'secondary': {
                    DEFAULT: '#04122d',
                },
                "dark": {
                    DEFAULT: "#4A5168",
                    2: '#172138'
                },
                "light":{
                    DEFAULT:"#c381db0f",

                }
            },
        },
    },
    plugins: [],
}

