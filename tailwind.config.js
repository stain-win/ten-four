/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./apps/**/src/**/*.{html,ts}",
        "./libs/**/src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
    ],
}

