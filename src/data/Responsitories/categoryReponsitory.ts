import { RESOURCE_TYPE } from "../../model";
import BaseReponsitory from "../BaseReponsitory";
import { HomepageResources } from "../Resource/HomepageResources";

export default class categoryResponsitory extends BaseReponsitory {
  constructor() {
    super();
  }
  getHomepage() {
    const resources = {
      path: "/Homepage",
      type: RESOURCE_TYPE.PUBLIC_TYPE,
    };
    // const resources = HomepageResources.Homepage()
    return this.apiGatewayAxios.getRequest(resources);
  }
}
