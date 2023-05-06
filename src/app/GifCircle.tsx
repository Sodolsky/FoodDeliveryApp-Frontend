import FoodGif from "../../public/food.gif";
import Image from "next/image";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: "600", subsets: ["latin"] });
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
      <span
        className={`md:self-end text-center md:text-left ${oswald.className} text-4xl text-primary`}
      >
        Order your food blazingly fast 🔥
      </span>
    </div>
  );
};
