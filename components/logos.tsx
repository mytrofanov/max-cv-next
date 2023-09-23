import React from 'react';
import { logos, logoSize } from '@/lib';
import { Animated } from '@/components/animated';
import Image from 'next/image';

const Logos = () => {
    return (
        <div className="flex flex-colum justify-between max-w-screen-sm flex-wrap">
            {logos.map(logo => {
                return (
                    <Animated key={logo.text}>
                        <Image key={logo.text} src={logo.path} alt={logo.text} width={logoSize} height={logoSize} />
                    </Animated>
                );
            })}
        </div>
    );
};

export default Logos;
