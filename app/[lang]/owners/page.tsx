import { db, Owner } from '@/mock-data';
import React from 'react';
import { DataTable } from '@/components/data-table';
import {ColumnDef} from "@tanstack/react-table";
import {Dictionary, LocaleType} from "@/localization";
import {getDictionary} from "@/get-dictionary";

async function getData(): Promise<Owner[]> {
    return db.owners;
}

interface OwnersPageProps {
    params: { lang: LocaleType };
}

export default async function OwnersPage(props: OwnersPageProps) {
    const {params} = props
    const data = await getData();
    const dictionary: Dictionary = await getDictionary(params.lang);

    const columns: ColumnDef<Owner>[] = [
        {
            accessorKey: 'owner',
            header: dictionary.tables.owners.owner,
        },
        {
            accessorKey: 'estateType',
            header: dictionary.tables.owners.type,
        },
        {
            accessorKey: 'address',
            header: dictionary.tables.owners.address,
        },
        {
            accessorKey: 'email',
            header: dictionary.tables.owners.email,
        },
    ];

    if (!data || !data.length) return null;
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
