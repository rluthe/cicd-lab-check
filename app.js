// Minimal web server with no external dependencies.
// Elastic Beanstalk's nginx proxy forwards requests to the port in the PORT variable (8080 by default).
const http = require('node:http');
const config = require('./src/site-config');
const { renderPage } = require('./src/render');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: config.version }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(renderPage(config));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
