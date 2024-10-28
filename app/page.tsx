'use client'
import Square from "./components/Square";
import Rectangle from "./components/Rectangle";
import React from "react";
import Span from "./components/Span";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold md:mt-[5dvh] text-6xl md:text-7xl w-full text-center flex justify-center items-center h-[20dvh] ">ST JOHANN SHOP</h1>
      <h3 className="w-full text-center mb-[10dvh] text-3xl px-[5dvw] md:text-4xl">Modern shop with things for your life, brand clothes & shoes</h3>
      <div className="w-full flex items-center flex-col">
        <div className="flex w-[70dvw] flex-col md:flex-row items-center justify-around md:mt-[5dvh]">
          <div className='md:bg-inside hidden bg-none px-[2rem] xl:flex items-center justify-center md:justify-center text-center font-semibold h-[15dvh] md:h-[35dvh] rounded-def md:shadow-inner-2 w-[35dvh] '>
              <h1 className="text-3xl md:text-6xl font-semibold">Nike & Puma</h1>
          </div>
          <Rectangle image="https://i.imgur.com/u0YdiEX.png" />
        </div>
        <div className="flex flex-col items-center md:flex-row justify-around w-[70dvw]  mt-[5dvh]">
          <Rectangle image="https://i.imgur.com/XIWjXGM.png" />
          <div className='md:bg-inside hidden bg-none px-[2rem] xl:flex items-center justify-center text-center font-semibold h-[15dvh] md:h-[35dvh] rounded-def md:shadow-inner-2 w-[35dvh]  '>
            <h1 className="text-3xl md:text-6xl font-semibold">Only comfort things</h1>
          </div>
        </div>
      </div>
      <Span />
      <div className="md:flex w-full hidden flex-row justify-center">
        <div className=" bg-inside w-[70dvw] md:px-[20dvh] shadow-inner-2 py-[5dvh] mb-[5dvh] md:mb-0 justify-center flex rounded-def md:rounded-br-none md:h-[35dvh] ">
          <h1 className="md:text-7xl text-3xl font-semibold px-[2dvw] text-center w-[50dvw] h-full flex items-center justify-center">The most important thing is YOU</h1>
        </div>
      </div>
      <div className="w-full md:flex hidden justify-center">
        <div className="w-[70dvw] flex justify-between ">
          <div className="w-full flex items-center flex-col mt-[7.5dvh] xl:mr-[15dvh] ">
            <div className='  flex items-center xl:justify-between justify-center w-full h-[30dvh] mb-[7.5dvh] '>
              {/* <Image src='https://i.imgur.com/Sg93YYX.png' width={303} height={103} className="shadow-inner-2 h-full rounded-def" alt="image" />
              <Image src='https://i.imgur.com/vXbg1R7.png' width={300} height={250} alt="image2" className="" /> */}
              <Square img="https://i.imgur.com/Sg93YYX.png" />
              <div className="hidden xl:block">
              <Square img="https://i.imgur.com/vXbg1R7.png" />
              </div>
              {/* <div style={{ backgroundImage: `url('https://i.imgur.com/vXbg1R7.png') `}} className="w-[35%] bg-cover rounded-def bg-inside h-[100%] bg-no-repeat shadow-inner-2 bg-center " ></div> */}
            </div>
            <div className="w-full flex-col xl:flex-row flex items-center justify-center xl:justify-between">
              <Square img="https://i.imgur.com/TNl9uMS.png" />
              <div className='bg-inside  px-[2rem] flex items-center justify-center text-center font-semibold h-[15dvh] mt-[5dvh] xl:mt-0 md:h-[35dvh] rounded-def shadow-inner-2 w-full md:w-[35dvh] '>
                <h1 className="text-3xl md:text-6xl font-semibold">All you need is here</h1>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url('https://i.imgur.com/aXrI3Rl.png')` }} className="bg-inside hidden xl:flex h-[80dvh] bg-no-repeat bg-center bg-cover shadow-inner-2 w-[45dvh]  "></div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-around md:hidden px-[5dvw]">
        <a href="/shoes">
          <div className="w-full bg-white mb-[5dvh] py-[2dvh] rounded-def px-[4dvw] ">
                    <h1 className="text-default w-full text-center text-4xl">SHOES</h1>
          </div>
        </a>
        <a href="/clothes">
          <div className="w-full bg-white py-[2dvh] rounded-def px-[4dvw] ">
                    <h1 className="text-default w-full text-center text-4xl">CLOTHES</h1>
          </div>
        </a>
        <a className="mt-[5dvh]" href="/basket">
          <div className="w-full bg-white py-[2dvh] rounded-def px-[4dvw] ">
                    <h1 className="text-default w-full text-center text-4xl">BASKET</h1>
          </div>
        </a>
      </div>
      <Span />
    </div>
  )
}