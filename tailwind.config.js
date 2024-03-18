/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        colors: {
            primary: '#10393b',
            white: '#FFFFFF',
            secondary: "#FF8800",
            grey: "rgb(156 163 175)",
            green: "#68b06e",
            lightgreen: "hsl(183, 50%, 98%)",
            textg:"#03363d",
            gray:"#f3f4f6"
        },
        fontFamily: {
            'raleway': ['Raleway', 'sans-serif'],
        }, textUnderlineOffset: {
            8: '13px',
        }
    },
    plugins: [],
}