import React from 'react';
import CustomSkeleton from '@/components/custom-skeleton';

const Loading = () => {
    return <CustomSkeleton rowNumber={10} customTailwindClass="h-4 w-[800px]" />;
};

export default Loading;
