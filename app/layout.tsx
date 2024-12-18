import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
import { Suspense } from "react";
 
const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nike shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-default antialiased`}
      >
        <div className="bg-white hidden text-black w-full mt-[2dvh] h-[7dvh] md:flex justify-between items-center px-[1dvw] fixed top-0 left-0 rounded-[20px]">
          <div className="h-full flex text-3xl ">
            <a href="/"><h1 className="text-5xl hover-scale-125 font-broadway h-full flex items-center">STJ</h1></a>
            <div className=" ml-[5dvw] grid grid-cols-3 gap-x-[105px] h-full items-center w-[20dvw] justify-between">
              <a href="/"><h1 className="hover-scale-125">Home</h1></a>
              <a href="/shoes"><h1 className="hover-scale-125">Shoes</h1></a>
              <a href="/clothes" ><h1 className="hover-scale-125">Clothes</h1></a>
            </div>
          </div>
          <a href="/basket">
          {/* <img className="hover-scale-125" src="https://cdn-icons-png.flaticon.com/512/2636/2636640.png" width={46} height={46} alt="logo"></img> */}
            <h1 className="text-4xl">Basket</h1>
          </a>
        </div>
        <div className="bg-default hidden md:flex mt-[2dvh] w-full h-[7dvh] "></div>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
