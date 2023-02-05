import Config from "../../configs/configEndpoint";
import ApiGatewayAxios from "../ApiGateWayAxios";

export default class BaseReponsitory {
  public apiGatewayAxios: ApiGatewayAxios;
  constructor() {
    this.apiGatewayAxios = new ApiGatewayAxios(Config.configs);
  }
}
