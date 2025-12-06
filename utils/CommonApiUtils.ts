import CommonUtils from "./CommonUtils";
import apiPathData from "../data/api-data/api-path-data.json"
import {APIRequestContext} from "@playwright/test"


export default class CommonApiUtils {

  private request : APIRequestContext;

  constructor(request : APIRequestContext) {
    this.request = request;
  }

  public async createToken() {
    const commonUtilsObj = new CommonUtils();
    const apiUserName = commonUtilsObj.decryptData(process.env.API_USER_NAME!)
    const apiPassword = commonUtilsObj.decryptData(process.env.API_PASSWORD!);

    const createTokenResp = await this.request.post(apiPathData.auth_path, {
      data: {
        "username" : apiUserName,
        "password" : apiPassword
      }
    });
       
    const createTokenJsonResp = await createTokenResp.json();
    console.log(createTokenJsonResp.token);
    return createTokenJsonResp.token;
  }
}