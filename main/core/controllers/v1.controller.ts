import {
  ExpressRequest,
  ExpressResponse,
  ExpressRouter,
} from "../../frame/modules/express.module";
import { V1Service } from "../services/v1.service";

export class V1Controller {
  constructor(private members: { v1Service: V1Service }) {}

  routes(): ExpressRouter {
    const router = ExpressRouter();

    router.get("/get", this.get);

    return router;
  }

  private get = async (
    req: ExpressRequest,
    res: ExpressResponse
  ): Promise<ExpressResponse> => {
    try {
      const response = await this.members.v1Service.get();
      return res.status(response.status).json(response.data);
    } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  };
}
