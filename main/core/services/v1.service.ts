import { RestResponseType } from "../../frame/modules/fastify.module";

export class V1Service {
  constructor() {}

  async get(): Promise<RestResponseType> {
    return {
      status: 200,
      data: {
        message: "Hello World",
      },
    };
  }
}
