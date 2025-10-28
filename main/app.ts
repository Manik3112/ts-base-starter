process.env.NODE_ENV = process.env.NODE_ENV || "local";

import * as dotenv from "dotenv";
import Fastify from "fastify";

import { AppModule } from "./core/app.module";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

(async function startServer() {
  const port = Number(process.env.PORT) || 3000;

  // Initialize Fastify
  const app = Fastify({
    logger: true,
  });

  // Register all routes through the central AppModule
  await AppModule.register(app, { prefix: "/v1" });

  // 404 handler
  app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
      error: `Cannot ${request.method} ${request.url}`,
    });
  });

  // Start server
  try {
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`Server is running on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
