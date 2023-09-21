import React from 'react';

interface TypographySmallProps {
    text: string;
}

const TypographySmall = (props: TypographySmallProps) => {
    const { text } = props;
    return <small className="text-sm font-medium leading-none">{text}</small>;
};

export default TypographySmall;
