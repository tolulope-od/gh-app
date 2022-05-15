const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: (theme) => ({
                'screen/2': '50vh',
                'screen/3': 'calc(100vh / 3)',
                'screen/4': 'calc(100vh / 4)',
                'screen/5': 'calc(100vh / 5)',
            }),
        },
        fontFamily: {
            Taviraj: ['Taviraj', 'sans-serif'],
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.2em',

          },
        maxHeight: {
            0: '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
            'half-screen': '70vh',
        },
        extend: {
            colors: {
                embash: colors.amber,
                tint: '#D4AF37',
                lightTint: '#D4AF371F',
                darK: '#333333',
                grey: colors.gray,
                greybg: '#E7EBEE',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
