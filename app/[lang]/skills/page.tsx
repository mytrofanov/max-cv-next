import { Dictionary, LocaleType } from '@/localization';
import * as React from 'react';
import { getDictionary } from '@/get-dictionary';
import Logos from '@/components/logos';

interface SkillsProps {
    params: { lang: LocaleType };
}

export default async function Skills(props: SkillsProps) {
    const { params } = props;
    const dictionary: Dictionary = await getDictionary(params.lang);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-sd p-4 max-w-screen-md">{dictionary?.skills.aboutMe.text}</div>
            <Logos />
        </div>
    );
}
