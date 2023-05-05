import FoodGif from "../../public/food.gif";
import Image from "next/image";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: "600", subsets: ["latin"] });
export const GifCircle = () => {
  return (
    <div className="absolute left-1/4 top-1/3 flex gap-4">
      <div className="bg-transparent self-start border-2 border-dashed p-1 overflow-hidden border-black rounded-full">
        <Image
          src={FoodGif}
          alt="Food Gif"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      <span className={`self-end ${oswald.className} text-4xl`}>
        Order your food blazingly fast 🔥
      </span>
    </div>
  );
};
