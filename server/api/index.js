const products = require("./products");

function api(server) {
  server.use("/api/products", products);
}

module.exports = api;
