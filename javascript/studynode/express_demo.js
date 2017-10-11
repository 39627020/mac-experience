//express_demo.js �ļ�
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World' + req.baseUrl);
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("http://%s:%s", host, port)

})