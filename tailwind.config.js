/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-dark": "#042A49",
                "main-light": "#195D8B",

                "sub-hover": "#E9C43D",
                "sub-dark": "#FDD33A",
                "sub-light": "#FFCC02",
            },
        },
    },
    plugins: [],
};
