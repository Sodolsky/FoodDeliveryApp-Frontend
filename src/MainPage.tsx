"use client";

import { useProtectedRoute } from "../utils/hooks/useProtectedRoute";
import { GifCircle } from "./app/GifCircle";
import { Navbar } from "./app/Navbar";
import { Spinner } from "./Spinner";

export const MainPage = () => {
  const { isAuthorized } = useProtectedRoute(true, "/view");
  if (isAuthorized) {
    return (
      <div className="flex min-h-screen relative justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <main className="flex min-h-screen relative ">
      <Navbar />
      <GifCircle />
    </main>
  );
};
