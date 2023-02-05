export interface IRemoteConfig {
  endpoint?: string;
  accessToken?: string;
  googleApiKey?: string;
  domain: string;
  clientDomain: string;
  [key: string]: any;
}
export enum API_METHOD {
  GET_METHOD = "get",
  POST_METHOD = "post",
  PUT_METHOD = "put",
  PATCH_METHOD = "patch",
  DELETE_METHOD = "delete",
}
export enum RESOURCE_TYPE {
  ADMIN_TYPE = "admin",
  PUBLIC_TYPE = "public",
  FILE = "file",
  FORM_DATA = "form data",
}
export interface IResource {
  type: string | RESOURCE_TYPE;
  path: string;
}
