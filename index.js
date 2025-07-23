const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(cors); // Enables all Cross-Origin Resource Sharing requests. TODO: configure this to be more specific.
server.use(helmet); // protects from common vulnerabilities by setting various HTTP headers appropriately
server.use(express.json());

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  return console.log(`\n ** Server listening on port ${PORT} ** \n`);
});
