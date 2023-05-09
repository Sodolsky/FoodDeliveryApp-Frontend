import React from "react";

export const Spinner = () => {
  return (
    <figure className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="loader"></span>
      <span className="text-2xl mt-4 font-bold">Loading</span>
    </figure>
  );
};
