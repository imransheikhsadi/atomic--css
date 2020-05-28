module.exports = {
    cssDest: './src/style/atomic.css',
    options: {
        // namespace: '#atomic',
    },
    configs: {
        "breakPoints": {
            'xm': '@media(min-width:0)',
            'sm': '@media(min-width:576px)',
            'md': '@media(min-width:768px)',
            'lg': '@media(min-width:992px)',
            'xl': '@media(min-width:1200px)',
        },
        "custom": {
            "brand": "#0088cc",
            "light": "rgb(119, 119, 119)",
            "divider": '1px solid #000.5',
            "border": "2px solid #fff",
            "g": "grid"
        },
        "classNames": [

        ]
    },
    themeConf: '',
    rules: [
        {
            "type": "pattern",
            "name": "grid-auto-flow",
            "matcher": "Gaf",
            "allowParamToValue": true,
            "styles": {
                "grid-auto-flow": "$0"
            },
            "arguments": [
                {
                    "r": "row",
                    "c": "column"
                }
            ]
        },
        {
            "type": "pattern",
            "name": "gap",
            "matcher": "Gap",
            "allowParamToValue": true,
            "styles": {
                "gap": "$0"
            },
            // "arguments": [
            //     {
            //         "r": "row",
            //         "c": "column"
            //     }
            // ]
        },
        {
            "type": "pattern",
            "name": "gap",
            "matcher": "MinMaxW",
            "allowParamToValue": true,
            "styles": {
                "min-width": "$0",
                "max-width": "$1"
            }
        }
    ],
    helpers: {
        '$Container': () => [
            'M(a)',
            'W(100%)--xm',
            'Maw(540px)--sm',
            'Maw(720px)--md',
            'Maw(960px)--lg',
            'Maw(1140px)--xl'
        ],
        '$Layout': (type, break_points, value) => {
            if (break_points === 'full') {
                break_points = ['sm', 'md', 'lg', 'xl'];
            }

            const classes = []
            classes.push(`W(1/${value})--xm`);
            break_points.forEach((bp, i) => {
                classes.push(`W(1/${((i + 1) * type) + value})--${bp}`)
            });
            return classes;

        }
    }
}
