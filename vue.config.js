module.exports = {
  devServer: {
    proxy: {
     '/': {
          ws:false,
          target: 'https://www.missevan.com', // 要请求的目标服务器
          changeOrigin: true, //代理服务器会在请求头中加入相应Host首部，然后目标服务器就可以根据这个首部来区别要访问的站点了
        },
    }
  },
  publicPath:'./'
}
