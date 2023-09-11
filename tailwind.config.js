/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                online: "#51e57e",
                joinMe: "#42caff",
                busy: "#5b0b0b",
                askMe: "#e88134",
                offline: "gray",
                white: "#ffffff",
            },
        },
    },
    plugins: [],
};
