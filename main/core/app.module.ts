import { V1Controller } from "./controllers/v1.controller";
import { V1Service } from "./services/v1.service";
import { Router } from "../frame/modules/fastify.module";

export class AppModule {
  static async register(
    app: Router,
    options: { prefix: string }
  ): Promise<void> {
    const v1Service = new V1Service();

    const v1Controller = new V1Controller({
      v1Service: v1Service,
    });

    await app.register(v1Controller.routes(), options);
  }
}
