const { blue } = require('color-name')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	theme: {
		fontFamily: {
			manrope: ['Manrope']
		},
		container: {
			center: true
		},
		extend: {
			colors: {
				blue: '#8C82FC',
				green: '#44E4C9',
				sec: '#F8F8FF'
			}
		}
	},
	plugins: []
}
