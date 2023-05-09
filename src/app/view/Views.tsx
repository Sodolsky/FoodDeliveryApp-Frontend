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
    if (window.localStorage) {
      const userRole = window.localStorage.getItem("auth");
      if (!userRole) router.push("/");
      else {
        const authObj = JSON.parse(userRole) as backendLoginResponse;
        setRole(authObj.role);
        setisLoading(false);
      }
    }
  }, [window]);
  return !isLoading ? (
    <div> {role}</div>
  ) : (
    <div className="flex justify-center items-center w-screen h-screen">
      <Spinner />
    </div>
  );
};
