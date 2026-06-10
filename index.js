const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'healthy' }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'catalog-api-local-4',
    status: 'ok',
    message: 'Real app is running'
  }));
});

server.listen(PORT, () => {
  console.log(`catalog-api-local-4 listening on port ${PORT}`);
});
