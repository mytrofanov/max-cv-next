'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { LoginFormDictionary } from '@/localization';
import { useGlobalStore } from '@/store/global.store';
import { Locale } from '@/i18n-config';
import { useRouter } from 'next/navigation';
import { pathNameWithLang } from '@/lib/utils';

interface LoginFormProps {
    loginFormDictionary: LoginFormDictionary;
    lang: Locale;
    isAuth: boolean;
}

const LoginForm = (props: LoginFormProps) => {
    const { loginFormDictionary, lang, isAuth } = props;
    const [state, dispatch] = useGlobalStore();
    const router = useRouter();

    const formSchema = z.object({
        email: z.string().email({
            message: loginFormDictionary?.validation.email,
        }),
        password: z.string().min(6, {
            message: loginFormDictionary?.validation.password,
        }),
    });

    React.useEffect(() => {
        if (isAuth) {
            router.push(pathNameWithLang('/', lang));
        }
    }, [isAuth, lang, router]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        dispatch({
            type: 'setAuth',
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[600px] space-y-0">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{loginFormDictionary?.email.label}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={loginFormDictionary?.email.placeholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                {loginFormDictionary?.email.description}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{loginFormDictionary?.password.label}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={loginFormDictionary?.password.placeholder}
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormDescription    >
                                {loginFormDictionary?.password.description}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" >
                    {loginFormDictionary?.submit}
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
