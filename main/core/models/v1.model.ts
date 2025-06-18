import { DbClient } from "../../frame/modules/dbClient.module";
import { CommonUtil } from "../../frame/utils/common.util";

export class V1Model {
  private dbClient: DbClient;
  private commonUtil: CommonUtil;
  constructor() {
    this.dbClient = new DbClient("v1"); // TODO: DB Name
    this.commonUtil = new CommonUtil();
  }

  async get() {
    return {
      status: 200,
      data: "Hello World",
    };
  }
}
