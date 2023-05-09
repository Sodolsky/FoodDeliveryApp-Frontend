import { useContext } from "react";
import { backendLoginResponse } from "../../utils/interfaces";
import { GifCircle } from "./GifCircle";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen relative ">
      <Navbar />
      <GifCircle />
    </main>
  );
}
