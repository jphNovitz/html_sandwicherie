const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundPosition: {
            'top-2': 'center top -1rem',
        },
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
                'hero': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url('images/raphael-nogueira-Znvxeud6sDc-unsplash.jpg')",
                'detail': "linear-gradient(to bottom, rgba(13, 38, 17, 0.3), rgba(13, 38, 17, 0.8), rgba(13, 38, 17, 0.3) ), url('images/raphael-nogueira-Znvxeud6sDc-unsplash.jpg')",
                'detail-title': "linear-gradient(to right, rgba(249, 250, 251, 0.5), rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.5))",
                'prom': "linear-gradient(to right, rgba(134, 188, 66, 0), rgba(134, 188, 66, 0.4), rgba(134, 188, 66, 0.6) )",
                'roundies': "url('images/bg-rounds.png')",
                'orange': "linear-gradient(to right, rgba(217, 119, 6, 0.7), rgba(217, 119, 6, 1), rgba(217, 119, 6, 0.7) ), url('images/bg-orange-healthy.png')",
                'footer': "linear-gradient(to right, rgba(217, 119, 6, 0.95), rgba(217, 119, 6, .95), rgba(217, 119, 6, 0.95) ), url('images/bg-footer.png')"

            },
            transitionProperty: {
                height: 'height',
            },
        },
    },
    variants: {
        extend: {
            textColor: ['active'],
            fontWeight: ['active'],
            inset: ['hover']
        },
    },
    plugins: [],
}
