var http = require('http');
var setup = require('proxy');
var os = require('os');


function findLocalAddressByInterfaceName(interface_name) {
  function _innter_func(){
    var interfaces = os.networkInterfaces();
    iface = interfaces[interface_name]
    iface_address = iface[0]

    return iface_address.address
  }
  return _innter_func
}

var server = setup(http.createServer(),
                   {
                     localAddress: findLocalAddressByInterfaceName('bond0')
                   });
server.listen(3128, function () {
    var port = server.address().port;
      console.log('HTTP(s) proxy server listening on port %d', port);
});
