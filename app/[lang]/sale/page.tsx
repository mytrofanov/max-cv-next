import { getOwnerInfo, getUserPaymentHistory } from '@/mock-data';
import { Dictionary, LocaleType } from '@/localization';
import { getDictionary } from '@/get-dictionary';
import React from 'react';

const ownerId = '728ed52f';

const payments = getUserPaymentHistory(ownerId);
const owner = getOwnerInfo(ownerId);

interface PaymentsPageProps {
    params: { lang: LocaleType };
}

export default async function SalePage(props: PaymentsPageProps) {
    const { params } = props;
    if (!payments || !payments.length || !owner) return null;
    const dictionary: Dictionary = await getDictionary(params.lang);

    return (
        <div className="container mx-auto text-center">
            <h2>Components for sale:</h2>
        </div>
    );
}
