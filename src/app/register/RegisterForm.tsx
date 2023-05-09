"use client";
import { FormEvent, useEffect, useState } from "react";
import {
  authErrorObject,
  backendRegisterDataFormat,
  registerInterface,
} from "../../../utils/interfaces";
import { toast } from "react-toastify";
import { BackArrow } from "../BackArrow";
import { Spinner } from "@/Spinner";
const baseLoginFormData: registerInterface = {
  login: "",
  password: "",
  confirmPassword: "",
  role: "CUSTOMER",
};
//TODO Change string here to backend response with login
const registerUser = (formData: registerInterface): Promise<void | string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const userData: backendRegisterDataFormat = {
        username: formData.login,
        password: formData.password,
        role: formData.role,
      };
      const request = await fetch(`${backendUrl}/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userData),
      });
      const res = await request.json();
      resolve(res); //Resolve promise here
    } catch (error) {
      reject(error); //Reject promise here
    }
  });
};

export const RegisterForm = () => {
  const [formData, setformData] =
    useState<registerInterface>(baseLoginFormData);
  const [playAniamtion, setplayAniamtion] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    if (
      formData.login.length === 0 ||
      formData.password.length === 0 ||
      formData.confirmPassword.length === 0
    )
      return toast.error("Fill out your form!");
    if (formData.password.length < 8)
      return toast.error("Provide us with a password of length longer than 8!");
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Your provided passwords aren't the same!");
    }
    setisLoading(true);
    try {
      const res = await registerUser(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    setplayAniamtion(true);
  }, []);
  return (
    <>
      <form
        className={`translate-y-full relative ${isLoading && "blur-md"} ${
          playAniamtion && `!translate-y-0`
        } duration-500 ease-out transition-all p-6 bg-white rounded-lg border-black shadow-xl flex flex-col justify-center gap-2 items-center `}
        onSubmit={handleSubmit}
      >
        <BackArrow />
        <span className="text-2xl font-bold">Register</span>
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
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label text-sm text-gray-500">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            onChange={(e) => handleChange(e)}
            name="confirmPassword"
            className="input input-bordered flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-dashed rounded-xl p-2">
          <label className="label text-sm">Role</label>
          <select
            className="select"
            name="role"
            onChange={(e) => handleChange(e)}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="RESTAURANT">Restaurant</option>
            <option value="DELIVERY">Delivery</option>
          </select>
        </div>
        <button className="btn btn-primary">Sign Up</button>
      </form>
      {isLoading && <Spinner />}
    </>
  );
};
