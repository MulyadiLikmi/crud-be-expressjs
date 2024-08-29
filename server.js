// server.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const customerRoutes = require("./routes/customerRoutes");

async function startExpressServer() {
  app.use(express.json());
  app.use(cors());
  app.use("/customers", customerRoutes);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startExpressServer();