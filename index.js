const { createServer } = require("node:http");
const router = require("./routers/router");

const hostname = "127.0.0.1";
const port = 5000;

const server = createServer((request, response) => {
  router.handleRouting(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
