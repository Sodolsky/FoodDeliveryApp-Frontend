"use client";

import { Spinner } from "@/Spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useProtectedRoute } from "../../../utils/hooks/useProtectedRoute";
import { userTypes } from "../../../utils/interfaces";

export const Views = () => {
  const { isAuthorized } = useProtectedRoute(false);
  const [role, setRole] = useState<userTypes>("CUSTOMER");
  const router = useRouter();
  return isAuthorized ? (
    <div> {role}</div>
  ) : (
    <div className="flex justify-center items-center w-screen h-screen">
      <Spinner />
    </div>
  );
};
