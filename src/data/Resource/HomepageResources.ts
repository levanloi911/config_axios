import { IResource, RESOURCE_TYPE } from "../../model";

export namespace HomepageResources {
  export const login = (): IResource => ({
    path: "/Homepage",
    type: RESOURCE_TYPE.PUBLIC_TYPE,
  });
}
