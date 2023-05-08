import FoodGif from "../../public/food.gif";
import Image from "next/image";
import { Oswald, Roboto_Mono } from "next/font/google";
import { OrderButton } from "./OrderButton";
const oswald = Roboto_Mono({ weight: "600", subsets: ["latin"] });
export const GifCircle = () => {
  return (
    <div className="absolute md:left-1/4 mx-auto top-1/3 flex justify-center items-center md:flex-row flex-col gap-4">
      <div className="bg-transparent lg:self-start border-2 border-dashed p-1 overflow-hidden border-black rounded-full">
        <Image
          src={FoodGif}
          alt="Food Gif"
          width={250}
          height={250}
          priority={true}
          className="rounded-full"
        />
      </div>
      <div className={`md:self-end text-center md:text-left`}>
        <div
          className={`${oswald.className} flex flex-col justify-center items-center gap-2 `}
        >
          <span className={`text-4xl text-primary`}>
            Order your food blazingly fast 🔥
          </span>
          <span className="flex gap-12 justify-center items-center flex-wrap">
            <OrderButton href={"/login"} text={"Order Now!"} />
            <OrderButton href={"/register"} text={"Try it Now!"} />
          </span>
        </div>
      </div>
    </div>
  );
};
