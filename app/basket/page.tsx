'use client'
import { useAtom } from "jotai";
import { basket, BasketItem } from "../store";

export default function Basket() {
    const [items, setItems] = useAtom(basket)
    // const click = () => {console.log(items)}
    const deleteItem = (item1: BasketItem) => {
        // items.splice(items.indexOf(item1), 1)
        const index = items.indexOf(item1)
        const array = [...items.slice(0, index), ...items.slice(index + 1)];
        setItems(array)
    }
    console.log(items)
    return (
        <div>
            <div className="bg-default w-full lg:grid grid-cols-4 py-[2dvh] h-full">
                {items.map((item) => (
                    <div key={items.indexOf(item)+0.2} className="border-white flex rounded-def h-52 mx-[2dvw] my-[2dvh] border-2">
                        <div className="w-1/2 h-full bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${item.image})` }}></div>
                        <div className="h-full w-1/2 flex px-[1dvw] justify-around flex-col items-center py-[2dvh] ">
                            <h1 className="text-3xl text-center">{item.name}</h1>
                            <h1 className="text-2xl">{item.price}</h1>
                            <div className="bg-red-500 text-default text-center cursor-pointer rounded-def px-3 " onClick={()=>{deleteItem(item)}}>Delete</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" lg:flex  justify-end w-[100dvw] ">
                <a className="w-1/2" href="/"><div className=" text-default bg-white mt-[2dvh] text-center mx-[2dvw] py-[2dvh] text-2xl rounded-def">Buy</div></a>
                <a className="w-1/2" href="/"><div className=" text-white border-2 border-white mt-[2dvh] text-center mx-[2dvw] py-[2dvh] text-2xl rounded-def">Home</div></a>
            </div>
        </div>
    )
}
