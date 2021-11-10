const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '80%': '80%',
            '50%': '50%',
            '40%': '40%',
            '33%': '33%',
        },
        colors: {
            "primary": "#86bc42",
            "dark": "#0d2611",
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue,
            green: colors.green,
            transparent: 'transparent',
        },
        extend: {
            fontFamily: {
                "hackney": ['Hackney Vector'],
                "rusty": ['Rusty Cola Pen'],
                "rusty-all-caps": ['Rusty Cola Pen Allcaps']
            },
            backgroundColor: {
                // 'hero': "rgba(0, 0, 0, 1)"
            },
            backgroundImage: {
                'hero': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url('../public/images/raphael-nogueira-Znvxeud6sDc-unsplash.jpg')",
                'prom': "linear-gradient(to right, rgba(134, 188, 66, 0), rgba(134, 188, 66, 0.4), rgba(134, 188, 66, 0.6) )",
                // 'prom': "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) )",
                // 'prom': "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6),  rgba(0, 0, 0, 0) )",
                'roundies': "url('../public/images/bg-rounds.png')"
                // 'prom': "linear-gradient(to right, rgba(217, 219, 6, 0), rgba(217, 219, 6, 0.6),  rgba(217, 219, 6, 0) )"
            }
        },
    },
    variants: {
        extend: {
            textColor: ['active'],
            fontWeight: ['active'],
            inset: ['hover'],
        },
    },
    plugins: [],
}
