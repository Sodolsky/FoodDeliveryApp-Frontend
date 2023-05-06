export type userTypes = "Restaurant" | "Delivery" | "User";
export interface loginFormInteface {
  login: string;
  password: string;
}
export interface registerInterface extends loginFormInteface {
  confirmPassword: string;
  role: userTypes;
}
