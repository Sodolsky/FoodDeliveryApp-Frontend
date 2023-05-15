"use client";

import { Spinner } from "@/Spinner";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useProtectedRoute } from "../../../utils/hooks/useProtectedRoute";
import { userTypes } from "../../../utils/interfaces";
import { CustomerView } from "./CustomerView";
import { DeliveryView } from "./DeliveryView";
import { RestaurantView } from "./RestaurantView";
const getUserRoleComponent = (role: userTypes): JSX.Element => {
  switch (role) {
    case "CUSTOMER":
      return <CustomerView />;
    case "DELIVERY":
      return <DeliveryView />;
    case "RESTAURANT":
      return <RestaurantView />;
  }
};
export const Views = () => {
  const { isAuthorized } = useProtectedRoute(false);
  const [role, setRole] = useState<userTypes>("RESTAURANT");
  const router = useRouter();
  return isAuthorized ? (
    <div>{getUserRoleComponent(role)}</div>
  ) : (
    <div className="flex justify-center items-center w-screen h-screen">
      <Spinner />
    </div>
  );
};
