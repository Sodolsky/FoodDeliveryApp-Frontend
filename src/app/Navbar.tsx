import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-screen h-[10vh] flex flex-col">
      <Link href={`/register`}>Rejestracja</Link>

      <Link href={`/login`}>Logowanie</Link>
    </nav>
  );
};
