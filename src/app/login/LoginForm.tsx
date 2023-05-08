"use client";
import { FormEvent, useEffect, useState } from "react";
import {
  backendLoginDataFormat,
  backendLoginResponse,
  loginFormInteface,
} from "../../../utils/interfaces";
import { toast } from "react-toastify";
import { BackArrow } from "../BackArrow";
const baseLoginFormData: loginFormInteface = {
  login: "",
  password: "",
};
const authUser = async (
  formData: loginFormInteface
): Promise<void | backendLoginResponse> => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const userData: backendLoginDataFormat = {
      username: formData.login,
      password: formData.password,
    };
    const query = await fetch(`${backendUrl}/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log(error);
  }
};
export const LoginForm = () => {
  const [formData, setformData] =
    useState<loginFormInteface>(baseLoginFormData);
  const [playAnimation, setplayAnimation] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.login.length === 0 || formData.password.length === 0)
      return toast.error("Fill out your form");
    //TODO Dodać HTTP requesta na backend
    authUser(formData);
  };
  useEffect(() => {
    setplayAnimation(true);
  }, []);
  return (
    <form
      className={`transition-all ${
        playAnimation && "!-translate-y-0"
      } -translate-y-full ease-out duration-500  relative p-6 bg-white rounded-lg border-black shadow-xl flex flex-col justify-center gap-2 items-center `}
      onSubmit={handleSubmit}
    >
      <BackArrow />
      <span className="text-2xl font-bold">Login</span>
      <div className="form-control">
        <label className="label text-sm text-gray-500">Username: </label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="login"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label text-sm text-gray-500">Password: </label>
        <input
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          className="input input-bordered flex justify-center items-center"
        />
      </div>
      <button className="btn btn-primary">Sign In</button>
    </form>
  );
};
