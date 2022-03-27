const http = require('http');


http.createServer((req, res) => {
  console.log('good');
  res.end('good')
}).listen(3000)
