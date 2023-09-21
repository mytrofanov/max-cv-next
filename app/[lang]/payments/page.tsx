import {payment, getOwnerInfo, getUserPaymentHistory} from '@/mock-data';
import OwnerInfo from '@/app/[lang]/payments/owner-info';
import { DataTable } from '@/components/data-table';
import {Dictionary, LocaleType} from "@/localization";
import {getDictionary} from "@/get-dictionary";
import React from "react";
import {ColumnDef} from "@tanstack/react-table";

const ownerId = '728ed52f'

const payments = getUserPaymentHistory(ownerId);
const owner = getOwnerInfo(ownerId);

interface PaymentsPageProps {
    params: { lang: LocaleType };
}

export default async function PaymentsPage(props: PaymentsPageProps) {
    const { params } = props;
    if (!payments || !payments.length || !owner) return null;
    const dictionary: Dictionary = await getDictionary(params.lang);

    const columns: ColumnDef<payment>[] = [
        {
            accessorKey: 'date',
            header: dictionary.tables.paymentTable.date,
        },
        {
            accessorKey: 'organization',
            header: dictionary.tables.paymentTable.organization,
        },
        {
            accessorKey: 'service',
            header: dictionary.tables.paymentTable.service,
        },
        {
            accessorKey: 'sum',
            header: dictionary.tables.paymentTable.sum,
        },
    ];

    return (
        <div className="container mx-auto">
            <OwnerInfo name={owner.owner} address={owner.address} />
            <DataTable columns={columns} data={payments} />
        </div>
    );
}
