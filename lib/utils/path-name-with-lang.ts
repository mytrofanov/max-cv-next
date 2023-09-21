export const pathNameWithLang = (pathName: string, locale: string) => {
    if (!pathName) return '/';

    return `/${locale}` + `${pathName}`;
};
