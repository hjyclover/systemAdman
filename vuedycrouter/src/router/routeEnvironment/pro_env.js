// 生产环境
module.exports = file => () => require('@/views/'+file +'.vue')