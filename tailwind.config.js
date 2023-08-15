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
                    2:'#16223A'
                },
                "dark": {
                    DEFAULT: "#4A5168",
                    2: '#172138',
                    3:'#4F5569'
                },
                "light": {
                    DEFAULT: "#c381db0f",
                    2:'#F6F8FE',
                    3:'#e6F8FE'
                },
                "green": {
                    DEFAULT: '#09C356'
                }
            },
        },
    },
    plugins: [],
}

