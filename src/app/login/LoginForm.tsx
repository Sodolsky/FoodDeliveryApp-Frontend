"use client";
import { FormEvent, useEffect, useState } from "react";
import {
  authErrorObject,
  backendLoginDataFormat,
  backendLoginResponse,
  loginFormInteface,
} from "../../../utils/interfaces";
import { toast } from "react-toastify";
import { BackArrow } from "../BackArrow";
import { Spinner } from "@/Spinner";
import { useRouter } from "next/navigation";
const baseLoginFormData: loginFormInteface = {
  login: "",
  password: "",
};

const authUser = (
  formData: loginFormInteface
): Promise<authErrorObject | backendLoginResponse> => {
  return new Promise(async (resolve, reject) => {
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
      if (query.status === 401) {
        const errorObject: authErrorObject = {
          reason: "User with that Name/Password doesn't exist!",
        };
        reject(errorObject);
      } else {
        const jsonData = (await query.json()) as backendLoginResponse;
        resolve(jsonData);
      }
    } catch (error) {
      const errorObject: authErrorObject = {
        reason: error as string,
      };
      reject(errorObject);
    }
  });
};

export const LoginForm = () => {
  const router = useRouter();
  const [formData, setformData] =
    useState<loginFormInteface>(baseLoginFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playAnimation, setplayAnimation] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    if (formData.login.length === 0 || formData.password.length === 0)
      return toast.error("Fill out your form");
    setIsLoading(true);
    try {
      const authObject = await authUser(formData);
      localStorage.setItem("auth", JSON.stringify(authObject));
      router.push("view");
    } catch (error) {
      const typedError = error as authErrorObject;
      toast.error(typedError.reason);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setplayAnimation(true);
  }, []);
  return (
    <>
      <form
        className={`transition-all ${isLoading && "blur-md"} ${
          playAnimation && "!-translate-y-0"
        } -translate-y-full ease-out duration-500   p-6 bg-white rounded-lg border-black shadow-xl flex flex-col justify-center gap-2 items-center `}
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
      {isLoading && <Spinner />}
    </>
  );
};
