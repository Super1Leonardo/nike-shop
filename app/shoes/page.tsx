import Card from "../components/Card";
import Span from "../components/Span";

export default function Shoes() {
    return (
        <div>
            <div className="w-full mt-[10dvh] mb-[5dvh] h-[15dvh] font-semibold flex justify-center ">
                <h1 className="md:text-9xl text-center  font-bold text-7xl text-white">SHOES CATALOG</h1>
            </div>
            <div className="flex w-full md:mt-[20dvh] mb-[200dvh] md:mb-[50dvh] xl:mb-0 justify-center  ">
                <div className=" gap-x-[8dvw] gap-y-[5dvh] h-[90dvh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                    <Card img="https://i.imgur.com/jj9DIfd.png" id={1} text="Nike Air Jordan 1" price="220$" />
                    <Card img="https://i.imgur.com/wq76RpV.png" id={2} text="Nike Air Force" price="200$" />
                    <Card img="https://i.imgur.com/8fl5wna.png" id={3} text="Nike Air Monarch" price="180$" />
                    <Card img="https://i.imgur.com/6HGH2Ic.png" id={4} text="Nike Air Jordan 4" price="250$" />
                    <Card img="https://i.imgur.com/mAw7M4x.png" id={5} text="Puma F1 X-Ray" price="190$" />
                    <Card img="https://i.imgur.com/ClalEAk.png" id={6} text="Puma Rebound Layup" price="210$" />
                    <Card img="https://i.imgur.com/9cZdZul.png" id={7} text="Puma RS-X" price="175$" />
                    <Card img="https://i.imgur.com/9ChUwqb.png" id={8} text="Puma RBD Game" price="220$" />
                </div>
            </div>
            <Span />
            <div className="w-full h-[50dvh] md:grid hidden grid-cols-1 md:grid-cols-2 gap-x-[5dvw] px-[5dvw] rounded-def ">
                <div style={{ backgroundImage: `url('https://i.imgur.com/nmgC6Kk.png')`  }} className="bg-default h-full rounded-def bg-no-repeat bg-center bg-cover shadow-inner-2" />
                <div className=" h-full"> 
                    <div style={{ backgroundImage: `url('https://i.imgur.com/dnuojwu.png')` }} className="bg-default bg-center bg-no-repeat shadow-inner-2 w-full h-1/2 mb-[5dvh] rounded-def "></div>
                    <div style={{ backgroundImage: `url('https://i.imgur.com/e1dabLo.png')` }} className="bg-default bg-center bg-no-repeat bg-cover shadow-inner-2 w-full h-[calc(50%-5dvh)] rounded-def "></div>
                </div>
            </div>
            <div className=" md:hidden bg-default shadow-inner-2 rounded-def pt-[5dvh] px-[5dvw] mx-[20dvw] ">
                <h1 className="text-5xl text-center font-semibold">Feel comfort in your life</h1>
                <div className="bg-cover h-[25dvh] mt-[5dvh] bg-center w-full " style={{ backgroundImage: `url('https://i.imgur.com/1DVFxnO.png')`  }} />
                <div className="bg-cover h-[25dvh] bg-center w-full " style={{ backgroundImage: `url('https://i.imgur.com/5hbSUvt.png')`  }} />
            </div>
        </div>
    )
}