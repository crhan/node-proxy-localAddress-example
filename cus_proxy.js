var http = require('http');
var setup = require('proxy');

var server = setup(http.createServer(),
                   {
                     localAddress: "10.137.67.156"
                   });
server.listen(3128, function () {
    var port = server.address().port;
      console.log('HTTP(s) proxy server listening on port %d', port);
});
