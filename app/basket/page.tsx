'use client'
import { useAtom } from "jotai";
import { basket, BasketItem } from "../store";
import { useEffect } from "react";

export default function Basket() {
    let [items, setItems] = useAtom(basket)
    const click = () => {console.log(items)}
    const deleteItem = (item1: BasketItem) => {
        let newItems = items.filter(item => item.name !== item1.name)
        setItems(newItems)
    }
    let indexes = Array(5).fill(0).map((_, i) => i+1)
    return (
        <div className="w-full pt-[10dvh] px-[15dvw] ">
            <div className="bg-default h-[80dvh] w-[80dvw] flex justify-between flex-col rounded-def px-[5dvw] py-[2dvh] shadow-inner-2 ">
                <div className="grid grid-rows-3 grid-cols-3">
                    {items.map((item) => (
                        <div key={items.findIndex(item => item.name)} className=" border-white border-2 rounded-def flex py-[2dvh] h-48 mt-4 w-[22dvw]">
                            <div style={{ backgroundImage: `url(${item.image})` }} className="h-full w-52 bg-center bg-contain bg-no-repeat" />
                            <div className="text-3xl flex flex-col justify-center items-start">
                                <h1 className="w-[10dvw] text-center">{item.name}</h1>
                                <h1 className="w-full text-center">{item.price}</h1>
                            </div>
                            <button className="ml-auto focus-visible:outline-none flex hover:cursor-default items-end h-[calc(100%+14px)] mr-auto"><img onClick={() => deleteItem(item)} className="hover:cursor-pointer" width="48" height="48" src="https://img.icons8.com/color/48/cancel--v1.png" alt="cancel--v1"/></button>
                        </div>
                    ))}
                </div>
                <div className="w-full flex text-3xl">
                    
                    <button className="rounded-def px-[2dvw] py-[2dvh] border-2 border-white w-full ml-[1dvw]" >Buy</button>
                </div>
            </div>
        </div>
    )
}
