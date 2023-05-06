export type userTypes = "RESTAURANT" | "DELIVERY" | "CUSTOMER";
export interface loginFormInteface {
  login: string;
  password: string;
}
export interface registerInterface extends loginFormInteface {
  confirmPassword: string;
  role: userTypes;
}
