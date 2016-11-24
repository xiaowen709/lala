var express = require('express');
var app = express();

//静态目录
app.use(express.static(__dirname + '/public'));

//路由业务逻辑
app.use('/user', require('./routers/users.js'));

//设置端口号
app.listen('8877');


