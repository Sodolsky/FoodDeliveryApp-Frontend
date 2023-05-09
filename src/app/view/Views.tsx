"use client";

import { Spinner } from "@/Spinner";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { userTypes, backendLoginResponse } from "../../../utils/interfaces";

export const Views = () => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [role, setRole] = useState<userTypes>("CUSTOMER");
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== undefined) {
      const userRole = window.localStorage.getItem("auth");
      if (!userRole) router.push("/");
      else {
        const authObj = JSON.parse(userRole) as backendLoginResponse;
        setRole(authObj.role);
        setisLoading(false);
      }
    }
  }, []);
  return !isLoading ? (
    <div> {role}</div>
  ) : (
    <div className="flex justify-center items-center w-screen h-screen">
      <Spinner />
    </div>
  );
};
