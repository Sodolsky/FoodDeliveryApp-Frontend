export type userTypes = "RESTAURANT" | "DELIVERY" | "CUSTOMER";
export interface loginFormInteface {
  login: string;
  password: string;
}
export interface authErrorObject {
  reason: string;
}
export interface registerInterface extends loginFormInteface {
  confirmPassword: string;
  role: userTypes;
}
export interface backendLoginResponse {
  accessToken: string;
  tokenType: string;
  role: userTypes;
}
export interface backendLoginDataFormat {
  username: string;
  password: string;
}
export interface backendRegisterDataFormat extends backendLoginDataFormat {
  role: userTypes;
}
