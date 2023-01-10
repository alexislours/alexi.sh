/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			aspectRatio: {
				"2/1": "2 / 1"
			},
			typography: {
				DEFAULT: {
					css: {
						img: {
							margin: "1em auto auto auto"
						},
						"h1, h2, h3, h4": {
							display: "flex",
							alignItems: "center",
							gap: "0.5em"
						},
						"code::before": {
							content: '""'
						},
						"code::after": {
							content: '""'
						},
						"* > code": {
							color: "white",
							backgroundColor: "#282c34",
							borderRadius: "0.2em"
						},
						code: {
							display: "inline-block",
							padding: "0em 0.5em"
						},
						"blockquote p:first-of-type::before": false,
						"blockquote p:last-of-type::after": false,
						blockquote: {
							fontStyle: "normal"
						},
						"h1 a": {
							textDecoration: "none"
						},
						"h2 a": {
							textDecoration: "none"
						},
						"h3 a": {
							textDecoration: "none"
						},
						"h4 a": {
							textDecoration: "none"
						}
					}
				}
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
