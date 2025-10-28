import { V1Service } from "../services/v1.service";
import { Router, Request, Response } from "../../frame/modules/fastify.module";

export class V1Controller {
  constructor(private members: { v1Service: V1Service }) {}

  routes() {
    return async (fastify: Router) => {
      fastify.get("/get", this.get);
    };
  }

  private get = async (request: Request, reply: Response): Promise<void> => {
    try {
      const response = await this.members.v1Service.get();
      reply.status(response.status).send(response.data);
    } catch (e: any) {
      reply.status(400).send({ error: e.message });
    }
  };
}
