import { AccountModel } from "../models/account-model";
import { Authentication } from "../usecases/authentication";

export const mockAuthentication = (): Authentication.Params => ({
  email: "",
  password: "",
});
export const mockAccountModel = (): AccountModel => ({
  accessToken: "1123233SDSDSD45",
});
