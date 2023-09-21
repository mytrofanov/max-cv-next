'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { redirectedPathName, currentLanguageName } from '@/lib/utils';
import { LocaleType } from '@/localization';
import { Animated } from '@/components/animated';

interface LangSelectProps {
    currentLocale: LocaleType;
}

const LangSelect = (props: LangSelectProps) => {
    const { currentLocale } = props;
    const pathName = usePathname();

    return (
        <Animated>
            <Link href={redirectedPathName(pathName, currentLocale === 'ua' ? 'en' : 'ua')}>
                {currentLanguageName(currentLocale)}
            </Link>
        </Animated>
    );
};

export default LangSelect;
