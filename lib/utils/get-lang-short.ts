//return first two letters of Language

import { LocaleType, ShortLanguages } from '@/localization/locale-types';

export const getLangShort = (lang: LocaleType): ShortLanguages => {
    return lang.slice(0, 2) as ShortLanguages;
};
