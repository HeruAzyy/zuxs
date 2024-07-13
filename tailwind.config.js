const { blue, purple } = require('color-name')

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
				purple: '#8C82FC',
				green: '#44E4C9',
				sec: '#E2E8F0'
			}
		}
	},
	plugins: []
}
