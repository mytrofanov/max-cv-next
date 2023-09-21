import React from 'react';

interface ProgressiveImageProps {
    preview: string;
    image: string;
    alt: string;
}

export const ProgressiveImage = (props: ProgressiveImageProps) => {
    const { preview, image, alt } = props;
    const [currentImage, setCurrentImage] = React.useState(preview);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setCurrentImage(image);
            setLoading(false);
        };
    }, [image]);

    return (
        <img
            style={{
                width: '100%',
                height: 'auto',
                filter: loading ? 'blur(20px)' : 'none',
                transition: 'filter 0.3s ease-out',
            }}
            src={currentImage}
            alt={alt}
        />
    );
};

export default ProgressiveImage;
