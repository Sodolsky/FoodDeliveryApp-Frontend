import Link from "next/link";
import React from "react";
interface OrderButtonI {
  href: string;
  text: string;
}
export const OrderButton: React.FC<OrderButtonI> = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className="floatingBoxShadow px-2 py-1 mt-4 text-2xl border border-primary rounded-xl">
        {text}
      </button>
    </Link>
  );
};
