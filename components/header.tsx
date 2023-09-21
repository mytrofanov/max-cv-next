'use client';
import React from 'react';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import LangSelect from '@/components/lang-select';
import ModeToggle from '@/components/theme-mode-toggle';
import { Locale } from '@/i18n-config';
import { pathNameWithLang } from '@/lib/utils';
import { HeaderDictionary, ModeToggleDictionary } from '@/localization';
import NavMenuItem from '@/components/navigation-menu-item';

interface HeaderProps {
    lang: Locale;
    headerDictionary: HeaderDictionary;
    modeToggleDictionary: ModeToggleDictionary;
    isAuth: boolean;
}

export const Header = (props: HeaderProps) => {
    const { lang, headerDictionary, modeToggleDictionary, isAuth } = props;

    return (
        <div className="max-w-screen-lg flex items-center justify-center m-auto p-6 lg:px-8" aria-label="Global">
            <NavigationMenu>
                <NavigationMenuList>
                    {isAuth ? (
                        <>
                            <NavMenuItem link={pathNameWithLang('/', lang)} title={headerDictionary.home} />
                            <NavMenuItem link={pathNameWithLang('/register', lang)} title={headerDictionary.register} />
                            <NavMenuItem link={pathNameWithLang('/account', lang)} title={headerDictionary.account} />
                            <NavMenuItem link={pathNameWithLang('/owners', lang)} title={headerDictionary.owners} />
                            <NavMenuItem link={pathNameWithLang('/payments', lang)} title={headerDictionary.payments} />
                        </>
                    ) : null}
                    <NavMenuItem link={pathNameWithLang('/about', lang)} title={headerDictionary.about} />
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center justify-between ml-auto">
                <div className="mr-2">
                    <ModeToggle dictionary={modeToggleDictionary} />
                </div>
                <LangSelect currentLocale={lang} />
            </div>
        </div>
    );
};

export default Header;
