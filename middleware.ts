import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { db } from '@/mock-data';
import { pathNameWithLang } from '@/lib/utils';

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;
    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
    let locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const locale = getLocale(request);

    //redirect to login if !isAuth
    if (!db.isAuth) {
        const url = request.nextUrl.clone();
        url.pathname = pathNameWithLang('/login', db.locale);
        return NextResponse.rewrite(url);
    }
    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // // If you have one
    // if (
    //   [
    //     '/manifest.json',
    //     '/favicon.ico',
    //     // Your other files in `public`
    //   ].includes(pathname)
    // )
    //   return

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
