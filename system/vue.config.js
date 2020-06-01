module.exports = {
	chainWebpack: config => {
	    // 其他配置
	    config.entry('main').add('babel-polyfill') // main是入口js文件
	    // 其他配置
	},
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/index.scss";`
      }
    }
  },
	
  publicPath: './'
	
};