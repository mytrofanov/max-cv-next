import { Dictionary, LocaleType } from '@/localization';
import * as React from 'react';
import { getDictionary } from '@/get-dictionary';

interface SkillsProps {
    params: { lang: LocaleType };
}

export default async function Skills(props: SkillsProps) {
    const { params } = props;
    const dictionary: Dictionary = await getDictionary(params.lang);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-sm">{dictionary?.skills.aboutMe.text}</div>
        </div>
    );
}
