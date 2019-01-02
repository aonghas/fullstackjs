import http from 'http';

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {
  
  res.write('Hello HTTP!\n')
  
});


