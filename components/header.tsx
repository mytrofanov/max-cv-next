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
}

export const Header = (props: HeaderProps) => {
    const { lang, headerDictionary, modeToggleDictionary } = props;

    return (
        <div className="max-w-screen-lg flex items-center justify-center m-auto p-6 lg:px-8" aria-label="Global">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavMenuItem link={pathNameWithLang('/', lang)} title={headerDictionary.home} />
                    <NavMenuItem link={pathNameWithLang('/skills', lang)} title={headerDictionary.skills} />
                    <NavMenuItem link={pathNameWithLang('/portfolio', lang)} title={headerDictionary.portfolio} />
                    <NavMenuItem link={pathNameWithLang('/sale', lang)} title={headerDictionary.sale} />
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
