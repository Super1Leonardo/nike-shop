import React, { FC } from 'react';

interface SquareProps {
    text?: string;
    img?: string;
}


const Square: FC<SquareProps> = ({text, img}) => {
    return (
        <div style={{ backgroundImage: `url('${img}')` }} className='bg-inside bg-cover bg-center flex items-center mt-[15dvh] md:my-0 mb-[5dvh] h-[50dvh] justify-center text-6xl text-center font-semibold md:h-[35dvh] md:rounded-def rounded-def md:rounded-t-[34px] shadow-inner-2 md:w-[35dvh] w-full '>
            {text}
        </div>
    );
};

export default Square;