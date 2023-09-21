import 'server-only';
import type { Locale } from './i18n-config';
import { Dictionary } from '@/localization';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => import('@/localization/dictionaries/en.json').then(module => module.default),
    ua: () => import('@/localization/dictionaries/ua.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
    dictionaries[locale]?.() ?? (await dictionaries.en());
