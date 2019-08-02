let express = require('express');
let path = require('path');
let app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 启用 代理，实现跨域请求
var proxy = require('http-proxy-middleware');
app.use('/', proxy({
    target: "https://www.missevan.com",
    changeOrigin: true,
    ws:false,
    
}));

app.listen(8000,function(){
    console.log('server start@localhost:8000')
})