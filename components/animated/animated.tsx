'use client';

import React from 'react';
import { animated, config, useSpring } from '@react-spring/web';

interface AnimatedProps {
    children: React.ReactNode;
}

const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.1,
];

const trans = (x: any, y: any, s: any) => {
    const rotateX = x * 4; // Поіграємось зі значеннями тут
    const rotateY = y * 4;
    return `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${s})`;
};

const Animated = (props: AnimatedProps) => {
    const { children } = props;
    const ref = React.useRef<HTMLDivElement>(null);
    const [xys, set] = React.useState([0, 0, 1]);
    const springs = useSpring({ xys, config: config.gentle });

    const onMouseLeave = () => {
        set([0, 0, 1]);
    };

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        set(calc(event.clientX, event.clientY, rect));
    };

    return (
        <animated.div
            ref={ref}
            style={{ transform: springs.xys.to(trans) }}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            className="flex items-center justify-center m-4"
        >
            {children}
        </animated.div>
    );
};

export default Animated;
