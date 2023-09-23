import Image from 'next/image';

interface ProgressiveImageProps {
    preview: string;
    image: string;
    alt: string;
}

export const ProgressiveImage = (props: ProgressiveImageProps) => {
    const { preview, image, alt } = props;

    return (
        <Image
            style={{
                width: '100%',
                height: 'auto',
                transition: 'filter 0.3s ease-out',
            }}
            width={800}
            height={400}
            sizes="(max-width: 768px) 100%"
            src={image}
            blurDataURL={preview}
            placeholder="blur"
            alt={alt}
        />
    );
};

export default ProgressiveImage;
