import React from 'react';

import styles from './cube.module.css';

export const Cube = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [isDown, setIsDown] = React.useState(false);
    const [startPos, setStartPos] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const block = document.getElementById('cubeBlock');
        if (!block) return;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        setPosition({
            x: viewportWidth * 0.75,
            y: viewportHeight - viewportHeight / 2,
        });
    }, []);

    const onMouseDown = (e: any) => {
        setIsDown(true);
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const onMouseUp = () => {
        setIsDown(false);
    };

    const onMouseMove = (e: any) => {
        if (!isDown) return;
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y,
        });
    };

    return (
        <div
            id="cubeBlock"
            className="cube_block"
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'scale(0.5)',
                zIndex: 1,
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            <div className={styles.cubeBody}>
                <div className={styles.cube}>
                    <div className={styles.cube_container}>
                        <div className={`${styles.back} ${styles.side}`} />
                        <div className={`${styles.left} ${styles.side}`} />
                        <div className={`${styles.right} ${styles.side}`} />
                        <div className={`${styles.top} ${styles.side}`} />
                        <div className={`${styles.bottom} ${styles.side}`} />
                        <div className={`${styles.front} ${styles.side}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};
