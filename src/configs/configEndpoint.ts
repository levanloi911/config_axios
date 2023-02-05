import { IRemoteConfig } from "../model";
const endpoint =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_DEV_ENDPOINT
    : process.env.REACT_APP_PROD_ENDPOINT;
export default class Config {
  static configs: IRemoteConfig = {
    domain: `${endpoint}/api`,
    endpoint: `${endpoint}/api`,
    clientDomain: `${endpoint}/api`,
    authEndpoint: `${endpoint}/api/auth`,
  };
  public initConfig(): Promise<IRemoteConfig> {
    return new Promise((resolve, reject) => {
      const config: IRemoteConfig = {
        domain: `${endpoint}/api`,
        endpoint: `${endpoint}/api`,
        clientDomain: `${endpoint}/api`,
        authEndpoint: `${endpoint}/api/auth`,
      };

      Config.configs = config;

      if (config) {
        resolve(config);
      } else {
        reject();
      }
    });
  }

  // static getBaseConfig = (): IRemoteConfig => {
  //   return Config.configs;
  // };
}
