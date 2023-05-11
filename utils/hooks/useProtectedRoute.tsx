"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { backendLoginResponse } from "../interfaces";

interface UseProtectedRouteResult {
  isAuthorized: boolean;
}
//? if isReversed is true that means that the route will be only available when user is not logged in
export function useProtectedRoute(
  isReversed: boolean,
  route: string = "/"
): UseProtectedRouteResult {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(
    !isReversed ? false : true
  );
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const userRole = window.localStorage.getItem("auth");
      if (!isReversed) {
        if (!userRole) router.push(route);
        else {
          const authObj = JSON.parse(userRole) as backendLoginResponse;
          setIsAuthorized(true);
        }
      } else {
        if (userRole) {
          router.push(route);
        } else {
          setIsAuthorized(false);
        }
      }
    }
  }, []);

  return { isAuthorized };
}
