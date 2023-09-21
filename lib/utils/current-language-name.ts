import { languages } from '@/localization/languages';
import { LocaleType } from '@/localization/locale-types';

export const currentLanguageName = (currentLocale: LocaleType) => {
    const lang = languages.find(lang => lang.locale === currentLocale);
    return lang?.name;
};
