module.exports = {
    devServer: {
         proxy: {
            '/': {
              ws:false,
              target: 'https://www.missevan.com',
        }
    }   
  },
}