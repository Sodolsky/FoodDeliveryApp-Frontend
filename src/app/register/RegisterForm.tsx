"use client";
import { FormEvent, useState } from "react";
import { registerInterface } from "../../../utils/interfaces";
const baseLoginFormData: registerInterface = {
  login: "",
  confirmLogin: "",
  password: "",
  role: "User",
};
export const RegisterForm = () => {
  const [formData, setformData] =
    useState<registerInterface>(baseLoginFormData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.login.length === 0 ||
      formData.password.length === 0 ||
      formData.confirmLogin.length === 0
    )
      return alert("Fill out your form");
    if (formData.password.length < 8)
      return alert("Provide us with a password of length longer than 8");
    //TODO Dodać HTTP requesta na backend
    console.log("Succeess");
  };
  return (
    <form
      className="p-6 bg-white rounded-lg border-black shadow-xl flex flex-col justify-center gap-2 items-center "
      onSubmit={handleSubmit}
    >
      <span className="text-2xl font-bold">Register</span>
      <div className="form-control">
        <label className="label text-sm">Username: </label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="login"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label text-sm">Confirm Username: </label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="confirmLogin"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label text-sm">Password: </label>
        <input
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          className="input input-bordered flex justify-center items-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center border-2 border-dashed rounded-xl p-1">
        <label className="label text-sm">Role</label>
        <select className="select">
          <option value="User">User</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
