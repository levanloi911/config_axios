import axios, { AxiosResponse } from "axios";
import { API_METHOD, IRemoteConfig, IResource } from "../../model";

export default class ApiGatewayAxios {
  public _endpoint: string;
  public _timeOut: number = 5000;
  public cookie: any;
  public params: string | any;
  constructor(settings: IRemoteConfig) {
    this._endpoint = settings.endpoint || "";
  }
  callApiHandle = (
    resource: IResource,
    method: string,
    body?: any,
    bodyType?: string
  ) => {
    const { type, path } = resource;
    const endpoint = this._endpoint;
    const url = `${endpoint}${path}`;
    const config: any = {
      url,
      method,
      data: body,
      params: this.params,
      // withCredentials: true,
      timeout: this._timeOut,
      headers: this.headerConfig(type),
    };
    return axios(config)
      .then((res) => this.handleSuccess(res.data))
      .catch((err) => this.handleError(err.response.data));
  };

  getRequest(resource: IResource) {
    return this.callApiHandle(resource, API_METHOD.GET_METHOD);
  }

  postRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.POST_METHOD, body);
  }

  deleteRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.DELETE_METHOD, body);
  }
  putRequest(resource: IResource, body?: any) {
    return this.callApiHandle(resource, API_METHOD.PUT_METHOD, body);
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError(error: any) {
    throw new Error(error.message || error);
  }

  headerConfig(type: string) {
    if (type === "file") {
      return { "Content-Type": "multipart/form-data" };
    }
    return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }
}
