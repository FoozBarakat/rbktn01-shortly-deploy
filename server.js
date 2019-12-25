var app = require('./server-config.js');

var port = 4568;

app.listen(
  // we might need to edit this.
  //environment.port||
  port);

console.log('Server now listening on port ' + port);
