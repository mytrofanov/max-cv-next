import React from 'react';
import CustomSkeleton from '@/components/custom-skeleton';

const Loading = () => {
    return <CustomSkeleton rowNumber={3} />;
};

export default Loading;
