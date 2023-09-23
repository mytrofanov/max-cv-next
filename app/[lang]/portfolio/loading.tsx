import React from 'react';
import CustomSkeleton from '@/components/custom-skeleton';

const Loading = () => {
    return <CustomSkeleton rowNumber={10} />;
};

export default Loading;
