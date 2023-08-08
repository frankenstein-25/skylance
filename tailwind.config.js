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
                "dark": "#160E08"
            },
        },
    },
    plugins: [],
}

