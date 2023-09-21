'use client';

import React from 'react';

import { locales } from '@/localization';
import { StoreAction } from './store.types';
import { LocaleType } from '@/localization/locale-types';
import { Locale } from '@/i18n-config';

interface GlobalStore {
    isAuthenticated: boolean;
    defaultLocale: LocaleType;
    locale: LocaleType;
}

type GlobalStoreActions = StoreAction<'reset'> | StoreAction<'locale-set', LocaleType> | StoreAction<'setAuth'>;

const initialStoreState: GlobalStore = {
    isAuthenticated: false,
    defaultLocale: locales.en,
    locale: locales.en,
};

const storeReducer = (state: GlobalStore, action: GlobalStoreActions): GlobalStore => {
    if (action.type === 'setAuth') {
        return {
            ...state,
            isAuthenticated: true,
        };
    }
    if (action.type === 'reset') {
        return {
            ...state,
            isAuthenticated: false,
        };
    }
    if (action.type === 'locale-set') {
        return {
            ...state,
            locale: action.payload ?? locales.en,
        };
    }

    return state;
};

const GlobalStoreStateContext = React.createContext<GlobalStore>(initialStoreState);
const GlobalStoreDispatchContext = React.createContext<React.Dispatch<GlobalStoreActions> | null>(null);

const useGlobalStore = () => {
    const state = React.useContext(GlobalStoreStateContext);
    const dispatch = React.useContext(GlobalStoreDispatchContext);
    return [state, dispatch] as [GlobalStore, React.Dispatch<GlobalStoreActions>];
};

interface GlobalStoreProps {
    children: React.ReactNode;
    lang: Locale;
}

const GlobalStoreProvider = (props: GlobalStoreProps) => {
    const { children, lang } = props;
    const [state, dispatch] = React.useReducer(storeReducer, initialStoreState);

    React.useEffect(() => {
        if (lang) {
            dispatch({
                type: 'locale-set',
                payload: lang as LocaleType,
            });
        }
    }, [dispatch, lang]);

    return (
        <GlobalStoreStateContext.Provider value={state}>
            <GlobalStoreDispatchContext.Provider value={dispatch}>{children}</GlobalStoreDispatchContext.Provider>
        </GlobalStoreStateContext.Provider>
    );
};

export type { GlobalStore };
export { useGlobalStore, GlobalStoreProvider };
