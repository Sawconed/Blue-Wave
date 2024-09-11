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

                "bluewave-light": "#0864AF",
            },
            boxShadow: {
                "3xl-offset": "15px 15px 15px 1px rgba(0, 0, 0, 0.3)",
                "md-offset": "0 5px 4px 0 rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
