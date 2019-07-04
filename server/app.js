const next = require("next");
const express = require("express");
const api = require("./api");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const siteUrl = dev ? `http://localhost:${port}` : process.env.SITE_URL;

const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  // Create API Routes
  api(server);

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server listening on ${siteUrl}`);
  });
})();
