'use client';

import * as React from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface CustomSelectProps {
    placeholder: string;
    label?: string;
    options: any[];
    onSelect: (selected: string) => void;
}

const CustomSelect = (props: CustomSelectProps) => {
    const { label, options, placeholder, onSelect } = props;

    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-[180px] text-sm ">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map(option => {
                        return (
                            <SelectItem key={option.name} value={option.locale}>
                                {option.name}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default CustomSelect;
