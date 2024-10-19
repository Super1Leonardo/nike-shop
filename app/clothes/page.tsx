import Card from "../components/Card";
import Span from "../components/Span";

export default function Shoes() {
    return (
        <div>
            <div className="w-full mt-[10dvh] mb-[5dvh] h-[15dvh] font-semibold flex justify-center ">
                <h1 className="md:text-9xl text-center  font-bold text-7xl text-white">CLOTHES CATALOG</h1>
            </div>
            <div className="flex w-full md:mt-[20dvh] mb-[200dvh] md:mb-[50dvh] xl:mb-0 justify-center  ">
                <div className=" gap-x-[8dvw] gap-y-[5dvh] h-[90dvh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                    <Card img="https://i.imgur.com/a6OObau.png" id={9} text="Nike Classic Oversize" price="115$" />
                    <Card img="https://i.imgur.com/yzJ8iHV.png" id={10} text="Nike Classis Pants" price="55$" />
                    <Card img="https://i.imgur.com/0CnWps3.png" id={11} text="Nike T-Shirt" price="30$" />
                    <Card img="https://i.imgur.com/sHYUV2T.png" id={12} text="Nike Sweater" price="85$" />
                    <Card img="https://i.imgur.com/f8Wp0rV.png" id={13} text="Puma Sweater" price="80$" />
                    <Card img="https://i.imgur.com/Iawg7Wb.png" id={14} text="Puma T-Shirt" price="26$" />
                    <Card img="https://i.imgur.com/PpUq6Q1.png" id={15} text="Puma Classic Oversize" price="175$" />
                    <Card img="https://i.imgur.com/DlweKqr.png" id={16} text="Puma Sport Pants" price="220$" />
                </div>
            </div>
            <Span />
            <div className="w-full h-[50dvh] md:grid hidden grid-cols-1 mb-[5dvh] md:grid-cols-2 gap-x-[5dvw] px-[5dvw] rounded-def ">
                <div style={{ backgroundImage: `url('https://i.imgur.com/4kgOeTp.png')`  }} className="bg-default h-full rounded-def bg-no-repeat bg-center bg-cover shadow-inner-2" />
                <div style={{ backgroundImage: `url('https://i.imgur.com/O9KQDRc.png')`  }} className="bg-default h-full rounded-def bg-no-repeat bg-center bg-cover shadow-inner-2"></div>
            </div>
        </div>
    )
}