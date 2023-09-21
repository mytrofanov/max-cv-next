'use client';
import React from 'react';
import Link from 'next/link';
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';
import { Animated } from '@/components/animated';

interface NavigationMenuItemProps {
    link: string;
    title: string;
}

const NavMenuItem = (props: NavigationMenuItemProps) => {
    const { link, title } = props;
    const pathName = usePathname();
    const isActive = pathName === link;

    return (
        <Animated>
            <NavigationMenuItem>
                <Link href={link} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive}>
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">{title}</h4>
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </Animated>
    );
};

export default NavMenuItem;
