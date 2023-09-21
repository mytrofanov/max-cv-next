import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface CustomSkeletonProps {
    rowNumber: number;
    customTailwindClass?: string;
}

const CustomSkeleton = (props: CustomSkeletonProps) => {
    const { rowNumber, customTailwindClass } = props;

    const SkeletonRow = () => {
        return (
            <div className="flex items-center space-x-4 m-6">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className={customTailwindClass ? customTailwindClass : 'h-4 w-[250px]'} />
                    <Skeleton className={customTailwindClass ? customTailwindClass : 'h-4 w-[200px]'} />
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col justify-center items-center w-screen">
            {Array.from({ length: rowNumber }, (_, index) => (
                <SkeletonRow key={index} />
            ))}
        </div>
    );
};

CustomSkeleton.defaultProps = {
    width: 350,
};

export default CustomSkeleton;
