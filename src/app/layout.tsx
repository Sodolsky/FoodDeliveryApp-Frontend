import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastComponent } from "@/ToastComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GrubHub Clone",
  description: "Grubhub Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-400`}>
        {children}
        <ToastComponent />
      </body>
    </html>
  );
}
