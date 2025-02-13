import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css"
import { NavMenu } from "@/components/nav-menu/nav-menu";
import { getServerSession } from "next-auth";
import { getServerAuthSession } from "@/backend/authentication/auth";
const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  const user = session?.user;
  console.log(user);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavMenu session={user}/>
        {children}
      </body>
    </html>
  );
}
