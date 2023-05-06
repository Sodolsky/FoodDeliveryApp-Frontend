import Image from "next/image";
import Link from "next/link";
import React from "react";
export const BackArrow = () => {
  return (
    <Link
      href={"/"}
      className="absolute top-4 left-4 cursor-pointer hover:animate-pulse"
    >
      <Image src={"/return.png"} alt={"Back Arrow"} width={24} height={24} />
    </Link>
  );
};
