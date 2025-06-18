process.env.NODE_ENV = process.env.NODE_ENV || "local";

import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import { V1Controller } from "./core/controllers/v1.controller";
import { V1Service } from "./core/services/v1.service";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

(async function startServer() {
  const port = process.env.PORT;
  const app = express();

  // Initializing Utils

  // Initializing Services
  const v1Service = new V1Service();

  // Initializing Controllers
  const v1Controller = new V1Controller({
    v1Service: v1Service,
  });

  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cors());

  // Routes Controller Here
  app.use("/v1", v1Controller.routes());

  app.use((req, res) => {
    res.status(404).json({ error: `Cannot ${req.method} ${req.url}` });
  });

  app.listen(port, () => {
    console.log(`Server ${process.env.NODE_ENV} started on port ${port}`);
  });
})();
