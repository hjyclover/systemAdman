module.exports = {
    plugins: {
        "autoprefixer": {
            path: ['./src/*']
        },
        "postcss-import": {},
        "postcss-px-to-viewport-opt": {
            "viewportWidth": "1920", //视窗的宽度，对应的是我们设计稿的宽度
            "viewportHeight": "1080", // 视窗的高度
						"propList": ['*'],
            "unitPrecision": 2, //指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
            "viewportUnit": "vw", //指定需要转换成的视窗单位，建议使用vw
            "selectorBlackList": [], //指定不转换为视窗单位的类
            "minPixelValue": 1, // 小于或等于`1px`不转换为视窗单位
            "mediaQuery": false, // 允许在媒体查询中转换`px`
						"replace": true, //是否直接更换属性值，而不添加备用属性
						// "exclude": [/node_modules/]
            "exclude": /(\/|\\)(node_modules)(\/|\\)/
        },
    }
};