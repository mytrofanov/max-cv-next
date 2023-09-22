import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface OwnerInfoProps {
    name: string;
    address: string;
}

const OwnerInfo = (props: OwnerInfoProps) => {
    const { name, address } = props;
    return (
        <Card className="max-w-[260px] mb-2 p-2">
            <CardHeader>
                <CardTitle>{address}</CardTitle>
                <CardDescription>{name}</CardDescription>
            </CardHeader>
        </Card>
    );
};

export default OwnerInfo;
