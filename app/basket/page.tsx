'use client'
import { useAtom } from "jotai";
import { basket } from "../store";
import { useEffect } from "react";

export default function Basket() {
    let [items, setItems] = useAtom(basket)
    const click = () => {console.log(items)}
    const onclick = () => setItems(items.slice(0, items.length-1))
    return (
        <div className="w-full pt-[15dvh] px-[15dvw] ">
            <div className="bg-default h-[61dvh] flex justify-between flex-col rounded-def px-[5dvw] py-[5dvh] shadow-inner-2 ">
                <div className="">
                    {items.map((item) => (
                        <div className=" border-white border-2 rounded-def flex items-center justify-center hover:cursor-pointer h-12 mt-4 w-52">{item.name}</div>
                    ))}
                </div>
                <div className="">
                    <button onClick={click}>red</button>
                    <button onClick={onclick}>del</button>
                </div>
            </div>
        </div>
    )
}