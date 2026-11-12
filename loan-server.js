// Educational mock service. Never use real credentials, customer data, or live banking transactions.
const http = require('node:http');
const port = Number(process.env.PORT || 3001);
const name = "loan-service";
const send = (res, code, payload) => {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(payload));
};
http.createServer((req, res) => {
  if (req.method !== 'GET') return send(res, 405, {error: 'Method not allowed'});
  if (req.url === '/' || req.url === '/health') return send(res, 200, {service: name, status: 'ok', mode: 'demo'});
  if (req.url === "/loan-summary") return send(res, 200, {"loanId": "DEMO-001", "monthlyPayment": "Demo value only", "status": "active-demo"});
  return send(res, 404, {error: 'Not found'});
}).listen(port, '0.0.0.0', () => console.log(`${name} listening on ${port}`));
