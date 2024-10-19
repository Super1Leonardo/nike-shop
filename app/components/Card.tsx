'use client'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ICard {
    img: string;
    text: string;
    price: string;
    id: number
}

const Card: FC<ICard> = ({img, text, price, id}) => {
    const router = useRouter()
    function handleClick() {
        router.push(`/product/?id=${id}`)
    }
    return (
        <div onClick={handleClick} className='bg-default rounded-[16px] hover-scale-115 w-[32dvh] h-[32dvh] shadow-inner-2 ' >
            <div className=' h-[70%] w-full bg-center bg-contain bg-no-repeat ' style={{ backgroundImage: `url(${img})` }} ></div>
            <h1 className='font-bold w-full  text-center text-2xl'>{text}</h1>
            <div className='w-[90%] flex items-end justify-end h-[15%] '>
                <h1 className='font-semibold text-end text-2xl'>{price}</h1>    
            </div>    
        </div>
    );
};

export default Card;