import LoginForm from '@/components/login-form';
import React from 'react';
import { LocaleType } from '@/localization';
import { getDictionary } from '@/get-dictionary';
import { db } from '@/mock-data';

interface RegisterProps {
    params: { lang: LocaleType };
}

const Login = async (props: RegisterProps) => {
    const { params } = props;
    const dictionary = await getDictionary(params.lang);
    const isAuth = db.isAuth;

    return (
        <div className="flex flex-col justify-center items-center h-[80vh] max-w-[240px] mx-auto my-auto">
            {dictionary ? (
                <LoginForm loginFormDictionary={dictionary['loginForm']} lang={params.lang} isAuth={isAuth} />
            ) : null}
        </div>
    );
};

export default Login;
