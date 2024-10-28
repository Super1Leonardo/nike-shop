import React, { FC } from 'react';

interface RectangleProps {
    image?: string;
    clsname?: string;
}

const Rectangle: FC<RectangleProps> = ({image}) => {
    return (
        <div style={{ backgroundImage: `url('${image}')` }} className=' bg-inside bg-cover bg-center bg-no-repeat h-[35dvh] rounded-[34px] md:w-[70dvh] shadow-inner-2 w-[35dvh] '>
            
        </div>
    );
};

export default Rectangle;